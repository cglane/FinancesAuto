# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-30 03:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finances', '0005_transaction_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='source',
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]
