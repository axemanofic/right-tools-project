# Generated by Django 4.0.4 on 2022-06-24 08:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rt_app', '0015_kanbancolumn_kanbancard'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mindcard',
            name='parent',
        ),
    ]
