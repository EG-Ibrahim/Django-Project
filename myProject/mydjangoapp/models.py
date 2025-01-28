from django.db import models

# Create your models here.

class Post(models.Model):
    Male = 'M'
    Female = 'F'
    GENDER_CHOICES = (
        (Male,'Male'),
        (Female, 'Female'),
    )

    username = models.CharField(max_length=20, blank=False, null=False)

    text = models.TextField(blank=False, null=False)

    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default=Male)
    
    time = models.DateTimeField(auto_now_add=True)

class Contact(models.Model):

    Name = models.CharField(max_length=30, blank=False, null=False)

    Email =  models.EmailField(max_length=30, blank=False, null=False)

    Subject =  models.CharField(max_length=20, blank=False, null=False)

    Message = models.TextField(blank=False, null=False)

class Service(models.Model):
    Pick = "0"
    Screen = "1"
    Battery = "2"
    Charging = "3"
    Camera = "4"
    Software = "5"
    Data = "6"
    Other = "7"
    SERVICE_CHOICES = (
        (Screen, 'Screen repair'),
        (Battery, 'Battery replacement'),
        (Charging, 'Chrging port repair'),
        (Camera, 'Camera/sensor repairs'),
        (Software, 'Software troubleshooting'),
        (Data, 'Data recovery'),
        (Other, 'Other general repairs')
    )

    Name = models.CharField(max_length=30, blank=False, null=False)

    Email =  models.EmailField(max_length=30, blank=False, null=False)

    Device = models.CharField(max_length=30, blank=False, null=False)

    Service = models.CharField(max_length=30, choices=SERVICE_CHOICES, default="Pick the required service")

    Message = models.TextField(blank=False, null=False, default="Please describe the problem on your device")