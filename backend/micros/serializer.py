from rest_framework import serializers
from .models import Facultad,Carrera,Usuario,Proyecto,Integrantes,Hilos,Archivo
import hashlib
from django.contrib.auth.hashers import make_password


class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = '__all__'

class FacultadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facultad
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class ProyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = '__all__'

class IntegrantesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Integrantes
        fields = '__all__'

class HilosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hilos
        fields = '__all__'

class ArchivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archivo
        fields = '__all__'