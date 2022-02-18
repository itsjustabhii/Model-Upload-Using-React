from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.FileField(upload_to='post_images')
    #FIleField - lets you upload GLB file

    def __str__(self):
        return self.title