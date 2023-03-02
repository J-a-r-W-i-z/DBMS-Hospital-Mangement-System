from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path('Register/', index),
    path('Admit/', index),
    path('Appointment/', index),
    path('Discharge/', index)
]
