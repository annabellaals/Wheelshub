from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid

# Core model for a deal
class Deal(models.Model):

    # Id of a new deal
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    seller = models.UUIDField()

    # User specific details
    title = models.TextField()
    description = models.TextField()

    # Core specifications
    price = models.DecimalField(max_digits=10, decimal_places=2)
    make = models.TextField()
    model = models.TextField()
    year = models.PositiveIntegerField()
    mileage = models.PositiveIntegerField()

    # Other details
    condition = models.CharField(max_length=20)
    location = models.TextField()
    fuel_type = models.CharField(max_length=20, choices=[
        ('gasoline', 'Gasoline'),
        ('diesel', 'Diesel'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid')
    ])
    transmission = models.CharField(max_length=20, choices=[
        ('automatic', 'Automatic'),
        ('manual', 'Manual')
    ])
    body_type = models.CharField(max_length=20, choices=[
        ('sedan', 'Sedan'),
        ('suv', 'SUV'),
        ('hatchback', 'Hatchback'),
        ('truck', 'Truck'),
        ('coupe', 'Coupe'),
        ('convertible', 'Convertible')
    ])
    engine_capacity = models.DecimalField(max_digits=3, decimal_places=1)
    image = models.TextField()

    # Internal
    status = models.CharField(max_length=20, choices=[
        ('active', 'Active'),
        ('sold', 'Sold'),
        ('closed', 'Closed')
    ])
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title

    class Meta:
        db_table = 'deals'

class Bid(models.Model):
    
    # Automatically generate a unique UUID for each bid
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # UUIDs for the deal and buyer
    deal = models.UUIDField()
    buyer = models.UUIDField()

    amount = models.DecimalField(max_digits=10, decimal_places=2)
    message = models.TextField(blank=True, null=True)
    contact = models.CharField(max_length=150, null=False)

    status = models.CharField(max_length=10, default='pending', choices=[
        ('pending', 'Pending'),
        ('placed', 'Placed'),
        ('accepted', 'Accepted')
    ])

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.status

    class Meta:
        db_table = 'bids'


class SupportQuery(models.Model):
    # Unique identifier for each support query
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # User details
    name = models.CharField(max_length=100)
    email = models.EmailField()
    
    # Query details
    message = models.TextField()
    
    # Additional helpful fields
    status = models.CharField(max_length=20, default='open', choices=[
        ('open', 'Open'),
        ('in_progress', 'In Progress'), 
        ('resolved', 'Resolved'),
        ('closed', 'Closed')
    ])
    priority = models.CharField(max_length=20, default='medium', choices=[
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent')
    ])
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'support_queries'
        ordering = ['-created_at']



class Newsletter(models.Model):
    # Unique identifier for each subscription
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Subscriber email
    email = models.EmailField(unique=True)
    
    # Subscription status
    is_active = models.BooleanField(default=True)
    
    # Timestamp
    subscribed_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.email

    class Meta:
        db_table = 'newsletter'
        ordering = ['-subscribed_at']

