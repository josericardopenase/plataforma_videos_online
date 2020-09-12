from django.shortcuts import render
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def user(request):

    qs = request.user
    serializer = UserSerializer(qs)

    return Response(serializer.data)