# Generated by Django 4.0.3 on 2022-04-11 21:28

from django.db import migrations, models
import pathlib


class Migration(migrations.Migration):

    dependencies = [
        ('rt_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(null=True, upload_to=pathlib.PureWindowsPath('D:/DIPLOM/right-tools-project/backend/src/media/images')),
        ),
    ]
