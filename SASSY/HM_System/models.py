from django.db import models

# Create your models here.

class Doctor(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    name = models.CharField(max_length=50)