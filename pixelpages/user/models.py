from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser,PermissionsMixin

# Create your models here.
GENDER_CHOICES = [
    ( "male","Male"),
    ( "female","Female")
]

PIXEL_USER_STATUS = [
    ( "admin", "Admin" ),
    ( "author", "Author" ),
    ( "reader", "Reader" ),
    ( "staff",  "Staff" )
]

class PixelUserManager(BaseUserManager):
    def create_user(username,email,password = None,**extra_fields):
        if  not email:
            raise ValueError("Email is required !")
        email = self.normalize_email(email)
        user= self.model(email(email),**extra_fields)
        user.set_password(password)
        user.save(using =  self._db)
        return user

    def create_superuser(self,email,password=None, **extrafields):
        extra_fields.set_default("is_staff",True)
        extra_fields.set_default("is_superuser",True)
        extra_fields.set_default("is_admin",True)
        return self.create_user(email,password,**extra_fields)

class AbstractPixelUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField( default = False)
    date_created = models.DateTimeField(auto_now_add =True)

    object = PixelUserManager()
    
    USERNAME_FIELD ="username"
    REQUIRED_FIELDS = ['email']

class PixelUser(AbstractPixelUser):
    username = models.CharField(max_length = 25,unique= True)
    gender = models.CharField(max_length = 10, choices = GENDER_CHOICES)
    status = models.CharField(max_length =24, choices=PIXEL_USER_STATUS)

# class AdminPixelUser(AbstractPixelUser,PermissionsMixin):
#     is_admin = True
#     is_superuser = True
