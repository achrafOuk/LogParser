from myapp.views import LogoutView
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('myapp.urls')),
    path('api/login/',TokenObtainPairView.as_view()),
    path('api/login/refrech/',TokenRefreshView.as_view()),
    path('api/logout/',LogoutView.as_view()),
    #API doc
    path('project/docs/', include_docs_urls(title='LogParserAPI')),
    #get the schema of the API
    path('projet/schema/', get_schema_view(

        title="LogParserAPI",
        description="log Parser API using Django",
        version="1.0.0"
    ), name='openapi-schema'),
]
from django.conf import settings
from django.conf.urls.static import static

"""urlpatterns = [
    # ... the rest of your URLconf goes here ...
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)"""
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
