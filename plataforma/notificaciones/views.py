from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import notificacion
from .serializers import NotificacionSerializer

# Create your views here.
@api_view(['GET'])
def getUnReadNotifications(request):
    number = notificacion.objects.filter(usuario = request.user, visto = False).count()
    return Response(number)

@api_view(['GET'])
def getNotificationList(request):
    qs = notificacion.objects.filter(usuario = request.user).order_by('-fecha')[:8]
    if qs.exists():
        notificacion.objects.filter(visto = False).update(visto = True)
        serializer = NotificacionSerializer(qs, many=True)
        return Response(serializer.data)

    return Response({"error" : "no elements"})