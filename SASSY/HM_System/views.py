from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import DoctorSerializer
from .models import Doctor

# Create your views here.
class DoctorView(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
