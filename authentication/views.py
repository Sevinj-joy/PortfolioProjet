from xml.etree.ElementInclude import include
from django.http import HttpResponse
from django import render
from . import views

def home (request):
    return render(request, 'index.html')

def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        fname = request.POST['fname']
        lname =request.POST['lname']
        email= request.POST['email']

    return render(request, 'authentication/sign.html')

def signin(request):
    return render(request, 'authentication/login.html')

def signout(request):
    return render(request, 'authentication/signout.html')
