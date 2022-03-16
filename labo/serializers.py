from rest_framework import serializers

from labo.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'service', 'date_joined')

    def create(self, validated_data):
        return User.objects.create(**validated_data)