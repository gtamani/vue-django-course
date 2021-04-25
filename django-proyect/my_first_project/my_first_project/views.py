from django.http import HttpResponse
from django.template import Template,Context,loader 
from django.shortcuts import render
import datetime

def proyects(request): #/saludo
    # 1. Cargar el template
    """
    # Puede hacerse manualmente:

    with open("myFirstProject/templates/saludo.html","r") as handler:
        template = Template(handler.read())

    # ... o con un template-loader (más óptimo)
    # modificando en settings.py la lista TEMPLATES y seteando el path
    # y cargarlo con loader.get_template()

    template = loader.get_template("saludo.html")

    """
    # 2. Crear el contexto (dict)
    name,surname = "Giuliano","Tamani"    
    context = {"user_name":name,"user_surname":surname,"to_learn":["plantillas","formularios","vistas","despliegues"]}
    # 3. Renderizar
    #document = template.render(context)
    return render(request,"saludo.html",context)

def hello_world(request):
    return HttpResponse("Hello World!")

def get_date(request):
    date=datetime.datetime.now()
    return HttpResponse("Son las {}:{}:{}.".format(date.hour,date.minute,date.second))

def get_age(request, future_year, actual_age):
    future_age = actual_age + future_year - datetime.datetime.now().year 
    context = {"future_age":future_age,"future_year":future_year}
    return render(request,"get_age.html",context)
