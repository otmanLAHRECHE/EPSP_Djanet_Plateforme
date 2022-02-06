from django.urls import path, include

from EPSP_Djanet_app import views

urlpatterns = [
    path('admin_login/', views.login_admin),
    path('admin_logout/', views.logout_admin, name='logout'),
    path('admin_control_panel/', views.index, name='index'),
    path('remove_user/<str:pk>/', views.remove_user),
    path('contact/', views.contact, name='contact'),
    path('advices_list/', views.advices, name='advices_list'),
    path('auth-rest/', include('rest_framework.urls')),   # without token
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
    path('users_list/', views.getUsers, name='users_list'),

]
