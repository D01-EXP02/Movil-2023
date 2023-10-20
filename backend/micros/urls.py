from django.urls import path,include
from rest_framework import routers
from micros import views

router=routers.DefaultRouter()
router.register(r'facultades', views.FacultadViewSet)
router.register(r'carreras', views.CarreraViewSet)
router.register(r'proyectos', views.ProyectoViewSet)
router.register(r'integrantes', views.IntegrantesViewSet)
router.register(r'hilos', views.HilosViewSet)
router.register(r'creacionuser', views.CreacionUsuarioViewSet)
router.register(r'userinactivo', views.UsuariosInactivosViewSet)
router.register(r'archivo',views.ArchivosViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('usuarios/<int:cedula>/actualizar-rol/', views.actualizar_rol_usuario, name='actualizar-rol-usuario'),
    path('usuarios/activos/', views.lista_usuarios_activos, name='usuarios_activos'),
    path('verificar-cedula/<int:cedula>/', views.verificar_cedulaalumno, name='verificar_cedula'),
    path('verificar-ceduladocente/<int:cedula>/', views.verificar_ceduladocente, name='verificar_cedula'),
    path('consultarintegrantes/<proyecto_id>', views.consultarintegrantes, name='consultar-integrantes'),
    path('proyectos/por-cedula/<int:cedula>/', views.ProyectoPorCedulaView.as_view(), name='proyecto-por-cedula'),
    path('proyecto/<str:pk>/', views.ProyectoDetail.as_view(), name='proyecto-detail'),
    path('archivos/proyecto/<str:proyecto_id>/', views.obtener_archivos_por_proyecto, name='obtener-archivos-por-proyecto'),
    path('integrantes/<int:cedula>/<str:id_proyecto>/', views.cambiar_rol, name='cambiar-rol'),
    path('cambiar_estado_proyecto/<str:proyecto_id>/', views.cambiar_estado_proyecto, name='cambiar_estado_proyecto'),
    path('login/',views.login, name='login'),


    # Otras rutas de la aplicación si las tienes
]

