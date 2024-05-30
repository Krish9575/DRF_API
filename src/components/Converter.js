import React from "react";

function convertTime(distance, selectedVehicle) {
    const hours = distance / selectedVehicle.top_speed;
    const wholeHours = Math.floor(hours);
    const fractionalHours = hours - wholeHours;
  
    const minutes = fractionalHours * 60;
    const wholeMinutes = Math.floor(minutes);
    const fractionalMinutes = minutes - wholeMinutes;
  
    const seconds = fractionalMinutes * 60;
  
    return {
      hours: wholeHours,
      minutes: wholeMinutes,
      seconds: Math.round(seconds)
    };
  }


function convertFuelConsumption(distance, selectedVehicle) {
    return (distance / selectedVehicle.fuel_efficiency).toFixed(3);
  }