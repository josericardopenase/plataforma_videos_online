from django.contrib import admin
from .models import curso, apartado, profesor

# Register your models here.
class apartado_admin(admin.TabularInline):
    model = apartado
    extra = 0

class curso_admin(admin.ModelAdmin):
    model = curso
    inlines = [apartado_admin]

admin.site.register(curso, curso_admin)
admin.site.register(profesor)