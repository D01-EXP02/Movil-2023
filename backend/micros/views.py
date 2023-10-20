from django.shortcuts import render
from .serializer import FacultadSerializer,CarreraSerializer,UsuarioSerializer,ProyectoSerializer,IntegrantesSerializer,HilosSerializer,ArchivoSerializer
from .models import Facultad,Carrera,Usuario,Proyecto,Integrantes,Hilos,Archivo
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import generics
from django.contrib.auth import get_user_model

#usuario---
class CreacionUsuarioViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UsuarioSerializer

    def create(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(serializer.validated_data['password'])  # Usar set_password correctamente
            user.save()

            token, created = Token.objects.get_or_create(user=user)

            return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def login(request):
    usuario = request.data['usuario']
    password = request.data['password']

    user = get_user_model().objects.get(usuario=usuario)
    password_correcta = user.check_password(password)

    if not password_correcta:
        return Response({'error': 'Usuario o contraseña incorrecta'}, status=status.HTTP_401_UNAUTHORIZED)

    token, created = Token.objects.get_or_create(user=user)

    return Response({'token': token.key, "user": UsuarioSerializer(user).data}, status=status.HTTP_200_OK)



class FacultadViewSet(viewsets.ModelViewSet):
    queryset=Facultad.objects.all()
    serializer_class =FacultadSerializer

class CarreraViewSet(viewsets.ModelViewSet):
    queryset = Carrera.objects.all()
    serializer_class = CarreraSerializer

class IntegrantesViewSet(viewsets.ModelViewSet):
    queryset = Integrantes.objects.all()
    serializer_class = IntegrantesSerializer

class HilosViewSet(viewsets.ModelViewSet):
    queryset = Hilos.objects.all()
    serializer_class = HilosSerializer


class UsuariosInactivosViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.filter(rol='inactivo')
    serializer_class = UsuarioSerializer

@api_view(['GET'])
def lista_usuarios_activos(request):
    usuarios_activos = Usuario.objects.exclude(rol="INACTIVO")
    serializer = UsuarioSerializer(usuarios_activos, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def actualizar_rol_usuario(request, cedula):
    try:
        usuario = Usuario.objects.get(cedula=cedula)
    except Usuario.DoesNotExist:
        return Response({'detail': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

    nuevo_rol = request.data.get('rol', None)
    if nuevo_rol:
        usuario.rol = nuevo_rol
        usuario.save()
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)
    else:
        return Response({'detail': 'El campo "rol" no se proporcionó en la solicitud'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def verificar_cedulaalumno(request, cedula):
    try:
        # Buscar el usuario por cédula
        usuario = get_object_or_404(Usuario, cedula=cedula)
        
        # Verificar si el rol del usuario es "ALUMNO"
        if usuario.rol == "ALUMNO":
            return JsonResponse({"message": f"La cédula {cedula} existe en la base de datos y es un ALUMNO."})
        else:
            return JsonResponse({"message": f"La cédula {cedula} existe en la base de datos, pero no es un ALUMNO."},status=400)
    
    except Usuario.DoesNotExist:
        return JsonResponse({"message": f"La cédula {cedula} no existe en la base de datos."})
    
@api_view(['GET'])
def verificar_ceduladocente(request, cedula):
    try:
        # Buscar el usuario por cédula
        usuario = get_object_or_404(Usuario, cedula=cedula)
        
        # Verificar si el rol del usuario es "ALUMNO"
        if usuario.rol == "DOCENTE":
            return JsonResponse({"message": f"La cédula {cedula} existe en la base de datos y es un DOCENTE."})
        else:
            return JsonResponse({"message": f"La cédula {cedula} existe en la base de datos, pero no es un DOCENTE."},status=400)
    
    except Usuario.DoesNotExist:
        return JsonResponse({"message": f"La cédula {cedula} no existe en la base de datos."})
    


#proyecto---

class ProyectoViewSet(viewsets.ModelViewSet):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer

#integrantes--
@api_view(['GET'])
def consultarintegrantes(request, proyecto_id):
    try:
        # Busca todos los integrantes del proyecto con el proyecto_id dado.
        integrantes = Integrantes.objects.filter(id_proyecto=proyecto_id)

        # Crea una lista para almacenar la información de los integrantes.
        integrantes_info = []

        # Recorre los integrantes para obtener la información de cada uno.
        for integrante in integrantes:
            info = {
                "nombre": integrante.cedula_usuario.nombre,
                "apellido": integrante.cedula_usuario.apellido,
                "cedula": integrante.cedula_usuario.cedula,
                "rol": integrante.rol
            }
            integrantes_info.append(info)

        # Devuelve una respuesta con la información de los integrantes.
        return Response({"integrantes_info": integrantes_info})

    except Integrantes.DoesNotExist:
        return Response({"message": "No se encontraron integrantes para el proyecto con el ID proporcionado."}, status=404)
    
class ProyectoPorCedulaView(generics.ListAPIView):
    serializer_class = ProyectoSerializer

    def get_queryset(self):
        cedula = self.kwargs['cedula']
        return Proyecto.objects.filter(integrantes__cedula_usuario__cedula=cedula)
    

class ProyectoDetail(generics.RetrieveAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer    
#archivo--

class ArchivosViewSet(viewsets.ModelViewSet):
    queryset=Archivo.objects.all()
    serializer_class=ArchivoSerializer


@api_view(['GET'])
def obtener_archivos_por_proyecto(request, proyecto_id):
    try:
        archivos = Archivo.objects.filter(id_proyecto=proyecto_id)
        serializer = ArchivoSerializer(archivos, many=True)
        
        return Response(serializer.data)
    except Archivo.DoesNotExist:
        return Response({"message": "No se encontraron archivos para el proyecto con el ID proporcionado."}, status=404)


import json    
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def cambiar_rol(request, cedula, id_proyecto):
    if request.method == "PUT":
        # Obtener el nuevo rol desde el cuerpo JSON de la solicitud
        data = json.loads(request.body)
        nuevo_rol = data.get("nuevo_rol")

        try:
            # Buscar al integrante en función de la cédula y el ID del proyecto
            integrante = Integrantes.objects.get(cedula_usuario__cedula=cedula, id_proyecto__id_proyecto=id_proyecto)

            # Actualizar el rol del integrante
            integrante.rol = nuevo_rol
            integrante.save()

            return JsonResponse({"message": "Rol actualizado con éxito"})
        except Integrantes.DoesNotExist:
            return JsonResponse({"error": "Integrante no encontrado"}, status=404)
    else:
        return JsonResponse({"error": "Método no permitido"}, status=405)
    
@csrf_exempt
@api_view(['PUT'])

def cambiar_estado_proyecto(request, proyecto_id):
    try:
        nuevo_estado = request.data.get("nuevo_estado")  # Utiliza request.data para obtener los datos del cuerpo de la solicitud PUT

        # Busca el proyecto por su ID
        proyecto = Proyecto.objects.get(id_proyecto=proyecto_id)

        # Actualiza el estado del proyecto
        proyecto.estado = nuevo_estado
        proyecto.save()

        return JsonResponse({"message": "Estado del proyecto actualizado con éxito"})
    except Proyecto.DoesNotExist:
        return JsonResponse({"error": "No se encontró un proyecto con el ID proporcionado"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)