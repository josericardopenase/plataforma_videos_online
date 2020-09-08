from django.urls import path
from .views import getUnReadNotifications, getNotificationList


urlpatterns = [ 
    path('notificacion/numero/', getUnReadNotifications),
    path('notificacion/', getNotificationList)
] 
