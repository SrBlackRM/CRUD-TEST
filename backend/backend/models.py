from django.db import models

class DetailsModel(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    
    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
    