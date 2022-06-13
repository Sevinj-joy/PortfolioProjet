from xml.etree.ElementInclude import include
from django.http import HttpResponse
from django import render
from . import views

def home (request):
    return HttpResponse("Hello Sevinj")

def signup(request):
    return render(request, 'authentication/signup.html')

def signin(request):
    return render(request, 'authentication/signin.html')

def signout(request):
    return render(request, 'authentication/signout.html')
