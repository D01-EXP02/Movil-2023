# Generated by Django 4.2.6 on 2023-10-17 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('micros', '0004_alter_archivo_archivo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archivo',
            name='archivo',
            field=models.FileField(max_length=255, upload_to=''),
        ),
    ]
