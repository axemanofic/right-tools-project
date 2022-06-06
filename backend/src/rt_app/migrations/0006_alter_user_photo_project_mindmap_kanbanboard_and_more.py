# Generated by Django 4.0.4 on 2022-05-16 09:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import pathlib
import rt_app.storages


class Migration(migrations.Migration):

    dependencies = [
        ('rt_app', '0005_background'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(null=True, storage=rt_app.storages.OverwriteStorage, upload_to=pathlib.PureWindowsPath('D:/DIPLOM/right-tools-project/backend/src/media/images')),
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(null=True, storage=rt_app.storages.OverwriteStorage, upload_to=pathlib.PureWindowsPath('D:/DIPLOM/right-tools-project/backend/src/media/images'))),
                ('name', models.CharField(max_length=150)),
                ('description', models.TextField(null=True)),
                ('participant', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='manager', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='MindMap',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('description', models.TextField(null=True)),
                ('compress_background_url', models.URLField()),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='rt_app.project')),
            ],
        ),
        migrations.CreateModel(
            name='KanbanBoard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('description', models.TextField(null=True)),
                ('original_background_url', models.URLField()),
                ('compress_background_url', models.URLField()),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='rt_app.project')),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(storage=rt_app.storages.OverwriteStorage, upload_to=pathlib.PureWindowsPath('D:/DIPLOM/right-tools-project/backend/src/media/documents'))),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='rt_app.project')),
            ],
        ),
    ]
