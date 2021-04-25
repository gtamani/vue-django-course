from django.db import models

# Create your models here.

class Clientes(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=30)

class Merchandising(models.Model):
    name = models.CharField(max_length=30)
    section = models.CharField(max_length=30)
    price = models.IntegerField()

class Pedidos(models.Model):
    id = models.IntegerField(primary_key=True)
    date = models.DateField()
    entregados = models.BooleanField()

