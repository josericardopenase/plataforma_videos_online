
from django.urls import path
from .views import CursoListView, CursoDetailView, ApartadoDetailView


urlpatterns = [ 
    path('cursos/', CursoListView.as_view()),
    path('cursos/<int:id>/', CursoDetailView.as_view()),
    path('apartado/<int:id>/', ApartadoDetailView.as_view())
] 
