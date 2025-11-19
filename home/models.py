from django.db import models


# Create your models here.
class Message(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    body = models.TextField()
    is_replied = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.email}"
