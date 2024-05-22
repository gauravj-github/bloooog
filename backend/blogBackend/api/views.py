from django.shortcuts import get_object_or_404

# from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from api.serializers import CommentSerializer ,PostDetailSerializer,PostListSerializer, ContactSerializer
from api.models import Comment
from api.models import Post, Contact
  

# @api_view(['GET'])
# def comment_list_view(request, slug):
#     post_instance = get_object_or_404(Post, slug=slug)
#     comment_list = Comment.objects.filter(
#         post=post_instance, is_displayed=True)
#     serializer = CommentSerializer(comment_list, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST','GET'])
def ContactView(request):
     if request.method == 'GET':
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)
     if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class PostListView(generics.ListAPIView):
#     """View For List All Published Posts"""

#     # queryset = Post.objects.filter(is_published=True)
#     serializer_class = PostListSerializer
#     lookup_field = 'slug'


# class PostDetailView(generics.RetrieveAPIView):
#     """View For The Details Of A Single Post"""

#     queryset = Post.objects.all()
#     serializer_class = PostDetailSerializer
#     lookup_field = 'slug'



@api_view(['GET'])
def  PostListView(request):

    if request.method == 'GET':
        Posts = Post.objects.all().order_by('-published_on')
        serializer = PostListSerializer(Posts, many=True)
        return Response(serializer.data)


        
@api_view(['GET'])
def  PostDetailView(request, pk):
    if request.method == 'GET':
        Posts = Post.objects.get(id=pk)
        serializer = PostDetailSerializer(Posts, many=False)
        return Response(serializer.data)


# @api_view(['POST'])
# def comment_create_view(request):
#     post_instance = get_object_or_404(Post)
#     request.data['post'] = post_instance.pk
#     serializer = CommentCreateSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def comment_list(request, post_pk):
    post = get_object_or_404(Post, pk=post_pk)
    if request.method == 'GET':
        comments = post.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(post=post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# @api_view(['POST'])
# def createComment(request):
#     data = request.data
#     Comment = Comment.objects.create(
#         name= data['name']
#         body=data['body']
#         Post= data['post']
#     )
#     serializer = CommentCreateSerializer(Comment, many=False)
#     return Response(serializer.data)

