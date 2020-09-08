from django.shortcuts import render
from rest_framework import generics
from .models import apartado, profesor, curso
from .serializers import CursoGeneralSerializer, CursoDetailSerializer, ApartadoGeneralSerializer, ApartadoDetailSerializer
from rest_framework.response import Response

# Create your views here.
class CursoListView(generics.GenericAPIView):
    queryset = curso.objects.all()
    serializer_class = CursoGeneralSerializer

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class CursoDetailView(generics.GenericAPIView):
    queryset = curso.objects.all()
    serializer_class = CursoDetailSerializer

    def get(self, request, id):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset().filter(id = id)
        if queryset.exists():
            serializer = self.serializer_class(queryset.first())
            return Response(serializer.data)
        else:
            return Response({"information" : "este recurso no existe"})

class ApartadoDetailView(generics.GenericAPIView):
    queryset = apartado.objects.all()
    serializer_class = ApartadoDetailSerializer

    def get(self, request, id):
        queryset = self.get_queryset().filter(id = id)
        if queryset.exists():
            serializer = self.serializer_class(queryset.first())
            return Response(serializer.data)
        else:
            return Response({"information" : "este apartado no existe"})