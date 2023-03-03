from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = (
      (1, 'frontDeskOperator'),
      (2, 'dataOperator'),
      (3, 'doctor'),
      (4, 'admin')
    )

    id = models.AutoField(primary_key=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)
    password = models.CharField(max_length=256)
    username = models.CharField(max_length=64, unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['user_type']


class Patient(models.Model):
    GENDER_CHOICES = (
        (1, 'male'),
        (2, 'female'),
        (3, 'other')
    )
    AadharId=models.IntegerField(primary_key=True)
    Name=models.TextField()
    Address=models.TextField()
    Phone=models.TextField()
    Email=models.EmailField()
    Gender=models.PositiveSmallIntegerField(choices=GENDER_CHOICES)
    DOB=models.DateField()


class Doctor(models.Model):
    GENDER_CHOICES = (
        (1, 'male'),
        (2, 'female'),
        (3, 'other')
    )
    EmployeeId=models.OneToOneField(User,primary_key=True,on_delete=models.CASCADE)
    Name=models.TextField()
    Address=models.TextField()
    Phone=models.TextField()
    Email=models.EmailField()
    AadharId=models.IntegerField()
    Gender=models.PositiveSmallIntegerField(choices=GENDER_CHOICES)
    DOB=models.DateField()

class FdOperator(models.Model):
    GENDER_CHOICES = (
        (1, 'male'),
        (2, 'female'),
        (3, 'other')
    )
    EmployeeId=models.OneToOneField(User,primary_key=True,on_delete=models.CASCADE)
    Name=models.TextField()
    Address=models.TextField()
    Phone=models.TextField()
    Email=models.EmailField()
    AadharId=models.IntegerField()
    Gender=models.PositiveSmallIntegerField(choices=GENDER_CHOICES)
    DOB=models.DateField()

class DataOperator(models.Model):
    GENDER_CHOICES = (
        (1, 'male'),
        (2, 'female'),
        (3, 'other')
    )
    EmployeeId=models.OneToOneField(User,primary_key=True,on_delete=models.CASCADE)
    Name=models.TextField()
    Address=models.TextField()
    Phone=models.TextField()
    Email=models.EmailField()
    AadharId=models.IntegerField()
    Gender=models.PositiveSmallIntegerField(choices=GENDER_CHOICES)
    DOB=models.DateField()

class Administrator(models.Model):
    GENDER_CHOICES = (
        (1, 'male'),
        (2, 'female'),
        (3, 'other')
    )
    EmployeeId=models.OneToOneField(User,primary_key=True,on_delete=models.CASCADE)
    Name=models.TextField()
    Address=models.TextField()
    Phone=models.TextField()
    Email=models.EmailField()
    AadharId=models.IntegerField()
    Gender=models.PositiveSmallIntegerField(choices=GENDER_CHOICES)
    DOB=models.DateField()

class Test(models.Model):
    Code=models.AutoField(primary_key=True)
    Name=models.TextField()
    Description=models.TextField()
    Cost=models.IntegerField()

class Report(models.Model):
    ReportID=models.AutoField(primary_key=True)
    Patient=models.ForeignKey(Patient, on_delete=models.CASCADE)
    Doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    Test=models.ForeignKey(Test,on_delete=models.CASCADE)
    Date=models.DateTimeField()
    TestResult=models.TextField()

class Appointment(models.Model):
    AppointmentID=models.AutoField(primary_key=True)
    Patient=models.ForeignKey(Patient,on_delete=models.CASCADE)
    Doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    Start=models.DateTimeField()
    End=models.DateTimeField()

class Medication(models.Model):
    Code=models.AutoField(primary_key=True)
    Name=models.TextField()
    Brand=models.TextField()
    Description=models.TextField()

class Prescribes(models.Model):
    Appointment=models.ForeignKey(Appointment,on_delete=models.CASCADE)
    Medication=models.ForeignKey(Medication,on_delete=models.CASCADE)
    Patient=models.ForeignKey(Patient,on_delete=models.CASCADE)
    Doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    Dose=models.TextField()

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['Appointment', 'Medication'], name='first_constraint'),
        ]

class Room(models.Model):
    Number=models.IntegerField(primary_key=True)
    Type=models.TextField()
    Floor=models.IntegerField()
    Block=models.IntegerField()
    Unavailable=models.BooleanField()

class Stay(models.Model):
    StayID=models.AutoField(primary_key=True)
    Patient=models.ForeignKey(Patient,on_delete=models.CASCADE)
    Room=models.ForeignKey(Room,on_delete=models.CASCADE)
    Start=models.DateTimeField()
    End=models.DateTimeField()

class Treatment(models.Model):
    TreatmentID=models.AutoField(primary_key=True)
    Name=models.TextField()
    Cost=models.IntegerField()


class Undergoes(models.Model):
    Patient=models.ForeignKey(Patient,on_delete=models.CASCADE)
    Treatment=models.ForeignKey(Treatment,on_delete=models.CASCADE)
    Stay=models.ForeignKey(Stay,on_delete=models.CASCADE)
    Date=models.DateTimeField()
    Doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    Appointment=models.ForeignKey(Appointment,on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['Patient', 'Treatment','Stay','Date'], name='second_constraint'),
        ]