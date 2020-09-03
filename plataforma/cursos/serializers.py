from .models import curso, apartado, profesor
from rest_framework import serializers


class ApartadoGeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model = apartado
        fields = ('id','titulo', 'descripcion')


class ProfesorSerializer(serializers.ModelSerializer):
    class Meta:
        model = profesor
        fields = ('nombre', 'imagen')

class CursoGeneralSerializer(serializers.ModelSerializer):
    profesor = ProfesorSerializer()

    class Meta:
        model = curso
        fields = ('id', 'portada', 'titulo', 'descripcion', 'duracion', 'profesor')

class CursoDetailSerializer(serializers.ModelSerializer):
    profesor = ProfesorSerializer()
    apartados = ApartadoGeneralSerializer(many =True, read_only=True)

    class Meta:
        model = curso
        fields = ['id', 'portada', 'titulo', 'descripcion', 'duracion', 'profesor', 'apartados']

