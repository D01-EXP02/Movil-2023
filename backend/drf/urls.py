from django.contrib import admin
from django.urls import  path,include
from rest_framework.documentation import include_docs_urls
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('micros/V1/', include('micros.urls') ),
    path('docs/',include_docs_urls(title='api'))

]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


