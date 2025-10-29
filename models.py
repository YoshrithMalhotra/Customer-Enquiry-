from django.db import models
from django.db.models.manager import Manager

class Enquiry(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    objects: Manager = models.Manager()

    def __str__(self):
        return f"{self.name} <{self.email}>"
