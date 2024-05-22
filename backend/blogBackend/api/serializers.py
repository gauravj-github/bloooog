from rest_framework import serializers

from api.models import Post, Comment, Contact
# from api.serializers import CommentSerializer

class CommentSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=40,required=True)
    body = serializers.CharField(required=True)
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all(), required=True)
    class Meta:
        model = Comment
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    """DRF Serializer For Contacting"""
    name = serializers.CharField(max_length=40,required=True)
    email = serializers.CharField(required=True)
    message = serializers.CharField(required=True)
    class Meta:
        model = Contact
        fields = ['name',  'email',  'message' ]

class PostListSerializer(serializers.ModelSerializer):
    """DRF Serializer Listing All The Blog Posts"""

    # total_comments = serializers.IntegerField()
    # author_full_name = serializers.CharField()

    class Meta:
        model = Post
        fields = [ 'id' ,'title', 'short_description',
                  'image',   'published_on']


class PostDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For Details Of The Blog Posts"""

    # comments_list = CommentSerializer(many=True)
    # total_comments = serializers.IntegerField()
    # author_full_name = serializers.CharField()

    class Meta:
        model = Post
        fields = [  'title', 'body', 'image',
                  'published_on']
                #   , 'comments_list',   'total_comments']


# class CommentCreateSerializer(serializers.ModelSerializer):
#     """DRF Serializer Fpr Creating Comments By The User"""
  
#     class Meta:
#         model = Comment
#         fields = ['name','body','post' ]
