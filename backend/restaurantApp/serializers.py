from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import Restaurante

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    #modelo de usuario para crear un nuevo usuario
    class Meta:
        model = UserModel
        fields ='__all__'
    
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
        user_obj.username = clean_data['user_name']
        user_obj.save()
        return user_obj
    
#Autenticación
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        user = authenticate(username=clean_data['email'], password=clean_data['password'])
        if not user:
            raise ValidationError('Usuario no encontrado')
        return user
    
#serializador del usuario basado en el modelo devolviendo el usuario
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'user_name')

class RestauranteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurante
        fields = '__all__'