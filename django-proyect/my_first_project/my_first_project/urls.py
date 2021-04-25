"""myFirstProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myFirstProject.views import proyects,hello_world,get_date,get_age

urlpatterns = [
    path('admin/', admin.site.urls),
    path("proyects/", proyects), #(path, función view)
    path("proyects/hello-world",hello_world),
    path("proyects/get-date",get_date),
    path("proyects/get-age/<int:future_year>/<int:actual_age>",get_age)
]