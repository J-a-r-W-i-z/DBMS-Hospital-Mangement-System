from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path("doctor/", index),
    path("adminstrator/", index)
]
