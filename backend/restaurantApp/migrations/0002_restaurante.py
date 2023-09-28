# Generated by Django 4.2.5 on 2023-09-27 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurantApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurante',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='idRestaurante')),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre')),
                ('tipo', models.CharField(max_length=50, verbose_name='Tipo')),
                ('direccion', models.CharField(max_length=100, verbose_name='Dirección')),
                ('telefono', models.CharField(max_length=50, verbose_name='Telefono')),
            ],
        ),
    ]
