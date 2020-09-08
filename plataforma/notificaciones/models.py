from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class notificacion(models.Model):
    usuario = models.ForeignKey(get_user_model(), null = True, blank=True, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=255)
    contenido = models.TextField()
    visto = models.BooleanField(default=False)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.usuario.username


