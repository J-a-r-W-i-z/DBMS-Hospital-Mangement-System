# Generated by Django 4.1.7 on 2023-02-28 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HM_System', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=256),
        ),
    ]
