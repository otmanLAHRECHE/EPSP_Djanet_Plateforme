from rest_framework import serializers

from EPSP_Djanet_app.models import User


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id','email','service')