from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

# Create your models here.
from django.utils import timezone


class UserManager(BaseUserManager):
    def _create_user(self, email, password, is_staff, is_active, is_superuser, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        now = timezone.now()
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff=is_staff,
            is_active=is_active,
            is_superuser=is_superuser,
            last_login=now,
            date_joined=now,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, **extra_fields):
        return self._create_user(email, password, False, False, False, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        user = self._create_user(email, password, True, True, True, **extra_fields)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=254, unique=True)
    service = models.CharField(max_length=10)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['service']

    objects = UserManager()

    def get_absolute_url(self):
        return "/users/%i/" % (self.pk)


class Service(models.Model):
    serviceName = models.CharField(max_length=20)

    def __str__(self): return str(self.id)


class HealthWorkers(models.Model):
    firstName = models.CharField(max_length=15)
    lastName = models.CharField(max_length=15)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="service_workers")
    group = models.CharField(max_length=15)

    def __str__(self): return str(self.id)


class Garde(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="gardes_of_service")
    health_worker = models.ForeignKey(HealthWorkers, on_delete=models.CASCADE, related_name="gardes_of_worker")
    date = models.DateField()

    def __str__(self): return str(self.id)


class Morning(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="mornings_of_service")
    health_worker = models.ForeignKey(HealthWorkers, on_delete=models.CASCADE, related_name="mornings_of_worker")
    date = models.DateField()

    def __str__(self): return str(self.id)
