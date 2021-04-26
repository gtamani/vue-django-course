from django.db import models

# Create your models here.

class Clientes(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=30, verbose_name="Your adress")
    email = models.EmailField(blank=True,null=True)
    phone = models.CharField(max_length=30)

class Merchandising(models.Model):
    name = models.CharField(max_length=30)
    section = models.CharField(max_length=30)
    price = models.IntegerField()

    def __str__(self):
        return "%s - $%s" % (self.name.capitalize(),self.price)

class Pedidos(models.Model):
    date = models.DateField()
    entregados = models.BooleanField()

