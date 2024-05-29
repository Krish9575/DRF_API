from django.urls import path
from .views import VehicleListCreate

urlpatterns = [
    path('vehicles/', VehicleListCreate.as_view(), name='vehicle-list-create'),
]
