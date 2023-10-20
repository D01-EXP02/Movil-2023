from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _



class Facultad(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

class Carrera(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

import hashlib
from django.contrib.auth.hashers import make_password, check_password

class Usuario(AbstractBaseUser, PermissionsMixin):
    cedula = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    correo = models.CharField(max_length=255)
    usuario = models.CharField(max_length=255,unique=True)
    rol = models.CharField(max_length=255)
    carrera = models.ForeignKey(Carrera, on_delete=models.CASCADE)

    USERNAME_FIELD = 'usuario'
    REQUIRED_FIELDS = ['nombre', 'apellido', 'correo', 'rol', 'carrera']

    def __str__(self):
        return self.nombre


    def set_password(self, raw_password):
        # Genera una sal única para cada usuario (puedes personalizar esto)
        salt = hashlib.sha256(str(self.usuario).encode('utf-8')).hexdigest()
        # Combina la contraseña cruda con la sal
        salted_password = raw_password + salt
        # Calcula el hash de la contraseña
        hashed_password = hashlib.sha256(salted_password.encode('utf-8')).hexdigest()
        # Establece el campo de contraseña en el hash resultante
        self.password = hashed_password
       


    def check_password(self, raw_password):
        # Para verificar la contraseña, aplicamos el mismo proceso
        # y comparamos los hashes
        salt = hashlib.sha256(str(self.usuario).encode('utf-8')).hexdigest()
        salted_password = raw_password + salt
        hashed_password = hashlib.sha256(salted_password.encode('utf-8')).hexdigest()
        return hashed_password == self.password



    
class Proyecto(models.Model):
    id_proyecto = models.CharField(primary_key=True,max_length=255)
    título = models.CharField(max_length=255)
    descripción = models.TextField()
    fecha_radicado = models.DateField()
    estado = models.CharField(max_length=255)
    facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)  # Llave foránea a Facultad
    carrera = models.ForeignKey(Carrera, on_delete=models.CASCADE)  # Llave foránea a Carrera


class Integrantes(models.Model):
    id = models.AutoField(primary_key=True)
    cedula_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    rol = models.CharField(max_length=255)

class Hilos(models.Model):
    id = models.AutoField(primary_key=True)
    id_proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    comentario = models.TextField()
    fecha_comentario = models.DateTimeField()

class Archivo(models.Model):
    id = models.AutoField(primary_key=True)
    id_proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    archivo = models.FileField(max_length=255)  # Utiliza un CharField para almacenar la ruta del archivo

    def __str__(self):
        return self.archivo