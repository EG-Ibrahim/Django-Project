from .models import Post
from .models import Contact
from .models import Service
from .forms import PostForm
from .forms import ContactForm
from .forms import ServiceForm
from .import views
from django.shortcuts import HttpResponse,render,redirect

# Create your views here.

def Aboutus(request):
    return render(request, 'Aboutus.html')


def Homepage(request):
    if request.method == 'POST':
        details = ContactForm(request.POST)
        if details.is_valid():
            post = details.save(commit=False)
            post.save()
            form = ContactForm(None)
            return render(request, 'Homepage.html', {'form':form})
        else:
            return render(request, "Homepage.html", {'form':details})
    else:
        form = ContactForm(None)
        return render(request, 'Homepage.html', {'form':form})
# return render(request,'Homepage.html') #

def Catalogue(request):
    return render(request,'Catalogue.html')


def Cart(request):
    return render(request,'Cart.html')

def Services(request):
    if request.method == 'POST':
        details = ServiceForm(request.POST)
        if details.is_valid():
            post = details.save(commit=False)
            post.save()
            form = ServiceForm(None)
            return render(request, 'Services.html', {'form':form})
        else:
            return render(request, "Services.html", {'form':details})
    else:
        form = ServiceForm(None)
        return render(request, 'Services.html', {'form':form})
# return render(request,'Services.html') #