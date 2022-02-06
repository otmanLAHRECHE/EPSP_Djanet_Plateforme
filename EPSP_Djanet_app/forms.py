from django import forms
from django.contrib.auth.forms import UserCreationForm

from EPSP_Djanet_app.models import User


class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))


class UserCreationForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    service = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Service",
                "class": "form-control"
            }
        ))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))
    password_confirm = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password confirmation",
                "class": "form-control"
            }
        ))