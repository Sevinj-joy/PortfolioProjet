from xml.etree.ElementInclude import include

from django.http import HttpResponse

def home (request):
    return HttpResponse("Hello Sevinj")
