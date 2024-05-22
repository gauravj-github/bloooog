from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils import timezone

# from api.utils import unique_slug_generator


User = get_user_model()


class Post(models.Model):
    """Model For Blog Posts"""
    
    title = models.CharField(max_length=100)
    body = models.TextField()
    short_description = models.TextField(max_length=3000)
    # is_published = models.BooleanField(default=False)
    # created_on = models.DateTimeField(auto_now_add=True)
    published_on = models.DateTimeField(null=True, blank=True)
    image = models.ImageField(upload_to='images')  

    # last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
   

class Comment(models.Model):
    """Model For The Comments In The Blog Posts"""

    name = models.CharField(max_length=40)
    # email = models.EmailField()
    # website = models.URLField(blank=True, null=True)
    body = models.CharField(max_length=400)
    post = models.ForeignKey(Post, on_delete=models.CASCADE,
                             related_name='comments', related_query_name='comment')
    # is_displayed = models.BooleanField(default=True)
    # published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.name)


class Contact(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    message = models.TextField(max_length=400)

    def __str__(self):
        return (self.name)
    