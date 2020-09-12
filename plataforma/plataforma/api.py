from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from cursos.views import CursoListView, CursoDetailView


urlpatterns = [
    path('', include('cursos.urls')),
    path('', include('notificaciones.urls')),
    path('auth/', include('usuarios.urls')),
]