# Generated by Django 3.2 on 2021-04-26 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestion_de_pedidos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientes',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
