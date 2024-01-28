from django.contrib import admin
from .models import Product, Review, Order, OrderItem, ShippingAddress

# Register your models here.
admin.site.register([Product, Review, Order, OrderItem, ShippingAddress])
