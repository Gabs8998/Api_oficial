# Generated by Django 5.1 on 2024-09-19 12:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Classificacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('classf', models.CharField(max_length=255)),
            ],
        ),
        migrations.AlterField(
            model_name='filmes',
            name='classf',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.classificacao'),
        ),
    ]
