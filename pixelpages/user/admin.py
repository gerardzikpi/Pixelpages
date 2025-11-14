from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as UserAdminBase 
from .models import PixelUser

# Register your models here.
class UserAdmin(UserAdminBase):
    model = User
    list_display = ('email', 'full_name')
    fieldsets = (
        (None,{'fields':('email','password')}),
        ("Permissions",{'fields':('is_superuser','is_staff','groups','user_permissions')})
        ("Personal Info",{'fields':('full_name',)})
        ("Important dates",{'fields':('last_joined','date_joined')})
    )

admin.site.register(User,UserAdmin)