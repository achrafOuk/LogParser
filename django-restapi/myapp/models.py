from django.core.checks import messages
from django.db import models
from django.contrib.auth.models import User 
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from rest_framework.parsers import MultiPartParser


def getExtende(path):
    file = path.split('\\')[-1]
    file_name = file.split('.')
    extention = file_name[-1]
    if extention=="txt" or extention=="log":
        return(".".join(file_name[:-1]))
    else:
        return None
def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    extention = getExtende(filename)
    if extention:
        #return 'user_{0}/{1}'.format(User.id, filename)
        #check if file is txt
        if extention:
            return 'user_{0}/{1}'.format(instance.user.id, filename)
    else:
        return ''
# Create your models here.
class File(models.Model):
    file_id = models.AutoField(primary_key=True)
    #get today date
    date = models.DateTimeField(default=timezone.now)
    path =  models.FileField(editable = True,upload_to = user_directory_path)
    user= models.ForeignKey(User,on_delete=models.CASCADE)
    size = models.TextField()
    class Meta:
        db_table = 'files'
#register name
class Register(models.Model):
    register_id = models.AutoField(primary_key=True)
    file= models.ForeignKey(File,on_delete=models.CASCADE)
    message= models.TextField()
    messages_Type= models.TextField()
    date= models.DateTimeField(default=timezone.now)
    class Meta:
        db_table = 'File'