# Generated by Django 5.0.3 on 2024-04-20 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_alter_notes_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='user_files/'),
        ),
    ]
