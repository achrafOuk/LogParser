import json
from django.core.exceptions import ObjectDoesNotExist
from django.http import request
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import views
from rest_framework.filters import SearchFilter
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins
from rest_framework.permissions import AllowAny, DjangoModelPermissions, IsAdminUser, IsAuthenticated
from rest_framework.parsers import FileUploadParser, FormParser, JSONParser, MultiPartParser
from rest_framework_simplejwt.tokens import RefreshToken
from .exceptions import MyCustomExcpetion
#------------
from rest_framework import generics
from .logParser import splitMessages
from .models import Register
import os
from restapi.settings import MEDIA_ROOT
from rest_framework.renderers import JSONRenderer
#register new user
class RegisterNewUser(APIView):
    #allow anyone to see this page
    permission_classes = [AllowAny]
    renderer_classes = [JSONRenderer]
    def post(self,request):
        #serialized data
        userData = CustomUserSerializer(data=request.data)
        print(request.data)
        #check if username and email does not exists
        users = User.objects.all().values()
        msg = {""} 
        for user in users:
            if user['username']==request.data['username']:
                msg.add('username already exists')
            if user['email']==request.data['email']:
                msg.add('email already exists')
            if len(list(msg))>1:
                break
                #check that data is valid
        if list(msg)[0]=="":
            msg.pop()
        if userData.is_valid():
            #create new user
            try:
                newUser = userData.save()
                if newUser:
                    return JsonResponse({"info": "user was created with secusses"},status=status.HTTP_201_CREATED)
            except Exception as e:
                if len(list(msg)):
                    return Response({'error': True, 'content': f'{msg}'}, status=status.HTTP_400_BAD_REQUEST)
                return Response({'error': True, 'content': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(userData.errors, status=status.HTTP_400_BAD_REQUEST)
#remove jwt token and logout
class LogoutView(APIView):
    renderer_classes = [JSONRenderer]
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(detail={"logout"},status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
"""
User views
"""
#list all the users
class UserList(APIView):
    renderer_classes = [JSONRenderer]
    #give permition to admin only to see the users page
    permission_classes = [IsAuthenticated,IsAdminUser]
    queryset = User.objects.all()
    def get(self,request,format=None):
        #get all the register
        users = User.objects.all()
        #serialize the data
        serializer = UserSerializer(users,many=True)
        #return json object holding all the data
        return JsonResponse(serializer.data,safe=False)
class AddNewUser(APIView):
    renderer_classes = [JSONRenderer]
    #allow anyone to see this page
    permission_classes = [IsAuthenticated,IsAdminUser]
    def post(self,request):
        #serialized data
        userData = UserSerializer(data=request.data)
        #check if username and email does not exists
        users = User.objects.all().values()
        msg = {""} 
        for user in users:
            if user['username']==request.data['username']:
                msg.add('username already exists')
            if user['email']==request.data['email']:
                msg.add('email already exists')
            if len(list(msg))>1:
                break
        if list(msg)[0]=="":
            msg.pop()
            #return errors message
            raise MyCustomExcpetion(detail=msg, status_code=status.HTTP_400_BAD_REQUEST)
        #check that data is valid
        if userData.is_valid():
            try:
                #create new user
                newUser = userData.save()
                if newUser:
                    return Response({"info": "user was created with secusses"},status=status.HTTP_201_CREATED)
            except:
                return Response(userData.errors, status=status.HTTP_400_BAD_REQUEST)
class UserSeach(APIView):
    renderer_classes = [JSONRenderer]
    def get(self, request, username, format=None):
        try:
            user =User.objects.get(username=username)
        except User.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        serializer = UserSerializer(user)
        return Response(serializer.data)
#update user data
class UserUpdate(APIView):
    renderer_classes = [JSONRenderer]
    permission_classes = [IsAuthenticated,IsAdminUser]
    def get(self, request, id, format=None):
        try:
            user =User.objects.get(pk=id)
        except User.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        serializer = UserSerializer(user)
        return Response(serializer.data)
    def put(self,request,id,format=None):
        #check if user exists
        try:
            user =User.objects.get(pk=id)
        except User.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#delete user
class UserDelete(APIView):
    renderer_classes = [JSONRenderer]
    permission_classes = [IsAuthenticated,IsAdminUser]
    def delete(self,request,id):
        #check if user exists
        try:
            user =User.objects.get(pk=id)
        #return 404 if user does not exists
        except ObjectDoesNotExist:
            return Response({"Error": "user does not exists"}, status=status.HTTP_404_NOT_FOUND)
        #delete user
        user.delete()
        #return success message
        return Response({"Success": "user was deleted"}, status=status.HTTP_204_NO_CONTENT)

"""
File views
"""
#check if user is the owner of the file
from rest_framework.permissions import  IsAuthenticated, SAFE_METHODS
class FilesPermitionByUser(DjangoModelPermissions):
    message="only the owner can see this page"
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user == obj.user
#list all the files
class FilesList(generics.ListCreateAPIView,FilesPermitionByUser):
    renderer_classes = [JSONRenderer]
    #permission: make user see his file
    # user can't access to data only if he was authonfiticated
    permission_classes =[FilesPermitionByUser,IsAuthenticated] 
    queryset = File.objects.all()
    serializer_class = FileSerializer
    lookup_field="file_id"
    parser_classes = (FormParser, MultiPartParser)

class FileUploadView(APIView):
    renderer_classes = [JSONRenderer]
    parser_classes = [MultiPartParser, FormParser]
    #load txt file
    def post(self, request, format=None):
        print(list( request.data.items() ))
        print('----xxx---')
        serializer = FileSerializer(data=request.data)
        #read the data from the file as bytes
        fileData=request.data['path'].read()
        request.data['size']='0'
        request.data['user']=self.request.user.id
        #convert bytes to string
        fileContent = fileData.decode('utf-8')
        try:
            if serializer.is_valid():
                serializer.save()
                #get the file id
                fileId = File.objects.all().last()
                #get the path of a file
                filePath = File.objects.filter(file_id=fileId.file_id).values('path')
                for file in filePath:
                    filePath=file['path']
                #get the size of the file
                file = os.stat(os.path.join(MEDIA_ROOT,filePath))
                size = file.st_size
                sizeByKB = size/(1000)
                if sizeByKB<=1000:
                    size = str(round(sizeByKB))+"KB"
                else:
                    size = size/(1024**2)
                    size = str(round(size))+"MB"
                File.objects.filter(file_id=fileId.file_id).update(size=size)
                #get message logs by type
                log = splitMessages(fileContent,msgType='INFO')
                for msg in log:
                    #create new instance of register 
                    register = Register(file=fileId,message=msg,messages_Type ="INFO")
                    register.save()
                log = splitMessages(fileContent,msgType='ERROR')
                for msg in log:
                    register = Register(file=fileId,message=msg,messages_Type ="ERROR")
                    register.save()
                log = splitMessages(fileContent,msgType='LEVEL')
                for msg in log:
                    register = Register(file=fileId,message=msg,messages_Type ="LEVEL")
                    register.save()
                log = splitMessages(fileContent,msgType='FATAL ERROR')
                for msg in log:
                    register = Register(file=fileId,message=msg,messages_Type ="FATAL ERROR")
                    register.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error":str(e)}, status=status.HTTP_400_BAD_REQUEST)
class RegisterList(generics.ListCreateAPIView,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,mixins.RetrieveModelMixin):
    renderer_classes = [JSONRenderer]
    permission_classes = [IsAuthenticated,IsAdminUser]
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer
    lookup_field="id"
    def get(self,request,id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
class RegisterByFileId(APIView):
    renderer_classes = [JSONRenderer]
    def get(self,request,pk,format=None):
        try:
            file =File.objects.get(file_id=pk)
        except File.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        serializer = FileSerializer(file)
        return Response(serializer.data)
class RegisterSearchByFileId(generics.ListAPIView):
    renderer_classes = [JSONRenderer]
    serializer_class = RegisterSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        file_id =self.kwargs.get('pk')
        dicte={}
        liste=[]
        register = File.objects.filter(file_id=file_id)
        for reg in register :
            print(reg['file_id'])
        print(register)
        return None
        return register