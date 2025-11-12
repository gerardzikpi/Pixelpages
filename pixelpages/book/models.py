from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from user.models import PixelUser
# Create your models here.

GENRE_CHOICES =[
    ("romance","Romance"),
    ("adventure","Adventure"),
    ("history","History"),
    ("horror","Horror"),
    ("folklore","Folklore"),
    ("motivational","Motivational")
]

class Genre(models.Model):
    genre = models.CharField(max_length = 100, choices = GENRE_CHOICES )  

class Book(models.Model):
    title = models.CharField(max_length = 155)
    genre = models.ForeignKey(Genre, on_delete = models.CASCADE)
    author = models.ForeignKey(PixelUser,on_delete = models.CASCADE) 