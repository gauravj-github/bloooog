from django.urls import path
from . import views
urlpatterns = [
    path('contact/', views.ContactView,name='Contact'),
    path('posts/<int:post_pk>/comments/', views.comment_list, name='comment-list'),

    path('posts/', views.PostListView,name='Posts'),

    path('posts/<int:pk>/',views.PostDetailView,name='Post'),

    # path('posts/comments/<str:pk>/', views.)
]
