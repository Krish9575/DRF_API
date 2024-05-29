from rest_framework import generics
from .models import Vehicle
from .serializer import VehicleSerializer

class VehicleListCreate(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
