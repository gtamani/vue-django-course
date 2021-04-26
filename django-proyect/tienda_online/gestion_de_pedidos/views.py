from django.shortcuts import render
from django.http import HttpResponse
from gestion_de_pedidos.models import Merchandising


# Create your views here.

def busqueda_productos(request):
    return render(request,"busqueda_productos.html")

def buscar(request):

    if request.GET["product"]:
        search = request.GET["product"]
        if len(search) > 20:
            return HttpResponse("Texto demasiado largo, intenta de nuevo")
        art = Merchandising.objects.filter(name__icontains=search)
        #return HttpResponse("artículo buscado: %s" % request.GET["product"])
        return render(request,"busqueda_resultados.html",{"product":search,"result":art})
    else:
        return HttpResponse("No has introducido nada!")

def contacto(request):
    return render(request,"contacto.html")