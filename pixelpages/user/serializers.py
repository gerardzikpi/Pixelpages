from rest_framework import serializers
from .models import PixelUser

class PixelUserSerialzier(serializers.ModelSerializer):
    class Meta:
        model = PixelUser
        fields ="__all__"