from rest_framework.authtoken import views
from .views import user
from django.urls import path

urlpatterns = [
    path('token/', views.obtain_auth_token),
    path('user/', user)
]