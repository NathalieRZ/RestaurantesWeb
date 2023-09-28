from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('El correo es requerido.')
        if not password:
            raise ValueError('La contraseña es requerida')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        print(user)
        return user
    
    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError('El correo es requerido.')
        if not password:
            raise ValueError('La contraseña es requerida')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user
    
class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    user_name = models.CharField(max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']
    objects = UserManager()
    def __str__(self):
        return self.user_name

class Restaurante(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='idRestaurante')
    nombre = models.CharField(max_length=50, verbose_name='Nombre')
    tipo = models.CharField(max_length=50, verbose_name='Tipo')
    direccion = models.CharField(max_length=100, verbose_name='Dirección')
    telefono = models.CharField(max_length=50, verbose_name='Telefono')

    def __str__(self):
        return self.nombre