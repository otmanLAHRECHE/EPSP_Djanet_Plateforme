from django.urls import path, include

from EPSP_Djanet_app import views

urlpatterns = [
    path('auth-rest/', include('rest_framework.urls')),   # without token
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
    path('users_list/', views.getUsers, name='users_list'),
    path('add_new_user/', views.addNewUser, name='add_new_user'),


]
