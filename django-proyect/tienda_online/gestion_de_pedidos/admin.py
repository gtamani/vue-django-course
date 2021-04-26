from django.contrib import admin
from gestion_de_pedidos.models import Merchandising, Clientes,Pedidos

# Register your models here.

class ClientesAdmin(admin.ModelAdmin):
    list_display = ("name","address","email")
    search_fields = ("name", "address")

class MerchandisingAdmin(admin.ModelAdmin):
    list_filter = ("section",)

class PedidosAdmin(admin.ModelAdmin):
    list_display = ("date","entregados")
    search_fields = ("entregados",)
    date_hierarchy = "date"

admin.site.register(Merchandising, MerchandisingAdmin)
admin.site.register(Clientes,ClientesAdmin)
admin.site.register(Pedidos,PedidosAdmin)