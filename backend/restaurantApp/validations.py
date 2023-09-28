from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    email = data['email'].strip()
    username = data['user_name'].strip()
    password = data['password'].strip()
    print(email)
    print(username)
    print(password)
    ##
    if not email or UserModel.objects.filter(email=email).exists():
        raise ValidationError('Ingresa otro correo')
    ##
    if not password or len(password) < 8:
        raise ValidationError('Ingresa contraseña de mínimo 8 carácteres')
    ##
    if not username:
        raise ValidationError('Elige otro nombre de usuario')
    return data


def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError('El email es requerdio')
    return True

def validate_username(data):
    username = data['user_name'].strip()
    if not username:
        raise ValidationError('Elige otro nombre de usuario')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('La contraseña es requerida')
    return True