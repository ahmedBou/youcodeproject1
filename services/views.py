from django.shortcuts import render


def index(request):
    return render(request, "services/index.html")


def about(request):
    return render(request, 'services/about.html')
