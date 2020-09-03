from django.db import models


# Create your models here.
class curso(models.Model):
    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    duracion = models.FloatField()
    portada = models.ImageField(upload_to='images/')
    profesor = models.ForeignKey('profesor', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.titulo

class apartado(models.Model):
    curso = models.ForeignKey(curso, on_delete=models.CASCADE, related_name='apartados')
    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    video = models.FileField(upload_to='videos/', null = False, verbose_name="")

    @property
    def duracion(self):
        return self.video

class profesor(models.Model):
    imagen = models.ImageField()
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre