from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin

# Create your models here.

class User(AbstractUser, PermissionsMixin):
    USER_TYPE_CHOICES = (
      (1, 'frontDeskOperator'),
      (2, 'dataOperator'),
      (3, 'doctor'),
      (4, 'admin')
    )
    # GENDER_CHOICES = (
    #     (1, 'male'),
    #     (2, 'female'),
    #     (3, 'other')
    # )
    id = models.AutoField(primary_key=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)
    password = models.CharField(max_length=256)
    username = models.CharField(max_length=64, unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['user_type']


    # name=models.CharField(max_length=64)
    # email=models.EmailField(max_length = 254)
    # age=models.CharField(max_length=3)
    # sex=models.PositiveSmallIntegerField(choices=GENDER_CHOICES)
    # phone=models.CharField(max_length=15)


    