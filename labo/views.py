import io

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.utils import json

from labo.models import User
from labo.serializers import UserSerializer


@api_view(['GET'])
def getUsers(request):
    if request.method == 'GET' and request.user.is_superuser:
        queryset = User.objects.all()
        print(queryset)

        user_serialis = UserSerializer(queryset, many=True)
        return Response(user_serialis.data)

@api_view(['POST'])
def addNewUser(request):
    if request.method == 'POST' and request.user.is_superuser:
        stream = io.BytesIO(json)
        data = JSONParser().parse(stream)
        u_s = UserSerializer(data=data)
        if u_s.is_valid():
            u_s.save()
        return Response({"state" : "user added"})
