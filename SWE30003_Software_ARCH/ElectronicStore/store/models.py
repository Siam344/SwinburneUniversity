from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_owner = models.BooleanField(default=False)
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()

    def __str__(self):
        return self.name
class Payment(models.Model):
    card_number = models.CharField(max_length=16)
    payment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment on {self.payment_date.strftime('%Y-%m-%d')}"