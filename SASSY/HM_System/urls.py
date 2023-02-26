from django.urls import path, include
from .views import DoctorView

urlpatterns = [
    path('home', DoctorView.as_view())
]