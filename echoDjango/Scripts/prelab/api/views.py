from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EchoSerializer
from .models import Echo

class EchoViewSet(viewsets.ModelViewSet):
    queryset = Echo.objects.all().order_by('message')
    serializer_class = EchoSerializer

# Create your views here.
