
from django.urls import path
from .views import CursoListView, CursoDetailView


urlpatterns = [ 
    path('cursos/', CursoListView.as_view()),
    path('cursos/<int:id>/', CursoDetailView.as_view()),
] 
