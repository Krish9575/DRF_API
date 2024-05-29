from rest_framework import serializers
from .models import Vehicle

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['id', 'type_of_vehicle', 'top_speed', 'fuel_efficiency', 'fuel_tank_capacity', 'max_range']
