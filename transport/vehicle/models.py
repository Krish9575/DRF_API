from django.db import models

class Vehicle(models.Model):
   

    type_of_vehicle = models.CharField(max_length=100)
    top_speed = models.IntegerField()  # in km/h
    fuel_efficiency = models.FloatField()  # in km/l
    fuel_tank_capacity = models.IntegerField()  # in liters
    max_range = models.FloatField()  # in km

    def __str__(self):
        return f"{self.type_of_vehicle} - {self.max_range} km"


