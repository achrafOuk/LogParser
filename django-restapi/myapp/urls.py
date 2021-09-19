from django.urls import include, path
from .views import *
import rest_framework
urlpatterns = [
    #register of messages of log list
    path('register/', RegisterList.as_view()),
    #upload new file
    path('fileupload/', FileUploadView.as_view()),
    #user paths
    path('signup/',RegisterNewUser.as_view()),
    #get list of users
    path('users/', UserList.as_view()),
    #add new user by admin
    path('users/search/<slug:username>/', UserSeach.as_view()),
    path('users/new/',AddNewUser.as_view()),
    path('users/edit/<int:id>/',UserUpdate.as_view()),
    path('users/delete/<int:id>/',UserDelete.as_view()),

]
