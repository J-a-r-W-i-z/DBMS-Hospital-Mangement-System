# Generated by Django 4.1.7 on 2023-03-04 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HM_System', '0008_alter_administrator_aadharid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_active',
            field=models.IntegerField(default=1),
        ),
    ]
