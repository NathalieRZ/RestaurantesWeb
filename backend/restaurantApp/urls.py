from django.urls import path
from . import views
from rest_framework import routers
from django.urls import include

router = routers.DefaultRouter()
router.register(r'restaurante', views.RestaurantView, 'restaurante')

urlpatterns = [
    path('registro', views.UserRegister.as_view(), name='registro'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('usuario', views.UserView.as_view(), name='usuario'),
    path('index/', include(router.urls), name="index"),
]