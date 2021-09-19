from rest_framework import fields, serializers
from .models import Register,File,User
class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #exclude fields
        exclude = ['first_name','last_name','password','date_joined','is_active','groups', "user_permissions"]
class RegisterSerializer(serializers.ModelSerializer):
    file = FileSerializer(source='file_id',many=True)
    class Meta:
        model = Register
        fields = '__all__'
#signin new user
class CustomUserSerializer(serializers.ModelSerializer):
    #requered username
    username = serializers.CharField(required=True)
    #email
    email = serializers.EmailField(required=True)
    #password
    password = serializers.CharField(min_length=6, write_only=True)
    class Meta:
        model = User
        fields = ('username','email','password')
        extra_kwargs = {'password': {'write_only': True}}
    #create new user
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        #check that password is not null
        if password is not None :
            instance.set_password(password)
        instance.save()
        return instance
