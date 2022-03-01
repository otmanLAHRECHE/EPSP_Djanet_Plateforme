import datetime
import io

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.template import loader
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.utils import json

from EPSP_Djanet_app.forms import LoginForm
from EPSP_Djanet_app.models import User
from EPSP_Djanet_app.serializers import UserSerializer


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

