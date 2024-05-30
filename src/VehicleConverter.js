import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleConverter = () => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [distance, setDistance] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get('/api/vehicles/')
            .then(response => {
                setVehicles(response.data);
            });
    }, []);

    const handleCalculate = () => {
        const vehicle = vehicles.find(v => v.name === selectedVehicle);
        if (vehicle) {
            const time = distance / vehicle.top_speed;
            const fuelConsumption = distance / vehicle.fuel_efficiency;
            const outOfRange = distance > vehicle.max_range;
            setResult({ time, fuelConsumption, outOfRange });
        }
    };

    return (
        <div>
            <h1>Vehicle Transport Converter</h1>
            <input
                type="number"
                value={distance}
                onChange={e => setDistance(e.target.value)}
                placeholder="Enter distance (km)"
            />
            <div>
                {vehicles.map(vehicle => (
                    <label key={vehicle.name}>
                        <input
                            type="radio"
                            value={vehicle.name}
                            checked={selectedVehicle === vehicle.name}
                            onChange={e => setSelectedVehicle(e.target.value)}
                        />
                        {vehicle.name}
                    </label>
                ))}
            </div>
            <button onClick={handleCalculate}>Calculate</button>
            {result && (
                <div>
                    <p>Time to travel: {result.time.toFixed(2)} hours</p>
                    <p>Fuel consumption: {result.fuelConsumption.toFixed(2)} liters</p>
                    {result.outOfRange && <p style={{ color: 'red' }}>Out of range!</p>}
                </div>
            )}
        </div>
    );
};

export default VehicleConverter;
