import datetime

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.template import loader
from rest_framework.decorators import api_view

from EPSP_Djanet_app.forms import LoginForm
from EPSP_Djanet_app.models import User
from EPSP_Djanet_app.serializers import UserSerializer


def login_admin(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_superuser:
                    login(request, user)
                    return redirect("/EPSP_Djanet_Plateforme/admin_control_panel/")
                else:
                    msg = 'Invalid user'
            else:
                msg = 'Invalid credentials'
        else:
            msg = 'Error validating the form'

    return render(request, "accounts/login.html", {"form": form, "msg": msg})


@login_required(login_url="/admin_login/")
def logout_admin(request):
    logout(request)
    return render(request, "accounts/login.html")


@login_required(login_url="/admin_login/")
def index(request):
    today = datetime.date.today()

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November', 'December']

    date = [months[today.month - 5], months[today.month - 4], months[today.month - 3], months[today.month - 2],
            months[today.month - 1]]

    context = {
        'segment': 'index',
        'date': date,
        'user': User.objects.all().count(),
    }

    html_template = loader.get_template('index.html')
    return HttpResponse(html_template.render(context, request))




@login_required(login_url="/admin_login/")
def remove_user(request, pk):
    rem = User.objects.get(email=pk)
    if (rem is not None) and (not rem.is_superuser):
        rem.delete()
        return redirect('/EPSP_Djanet_Plateforme/users_list/')

    context = {
        'segment': 'users',
        'users': User.objects.all()
    }
    html_template = loader.get_template('users.html')
    return HttpResponse(html_template.render(context, request))


def contact(request):
    context = {
    }

    html_template = loader.get_template('contact.html')
    return HttpResponse(html_template.render(context, request))


@login_required(login_url="/admin_login/")
def advices(request):
    context = {
        'segment': 'advices',
    }

    html_template = loader.get_template('advices.html')
    return HttpResponse(html_template.render(context, request))


@api_view(['GET'])
def getUsers(request):
    if request.method == 'GET' and request.user.is_superuser:
        queryset = User.objects.all()
        print(queryset)

        user_serialis = UserSerializer(queryset, many=True)
        return JsonResponse(user_serialis.data, safe=False)

