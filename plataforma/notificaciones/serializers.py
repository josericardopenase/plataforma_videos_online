from .models import notificacion
from rest_framework import serializers


class NotificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = notificacion
        fields = ('id','titulo', 'contenido', 'visto')