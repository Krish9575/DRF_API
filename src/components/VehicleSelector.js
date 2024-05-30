// import React, { useEffect, useState } from 'react';

// const VehicleSelector = ({ selectedVehicle, setSelectedVehicle }) => {
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     fetch('api/vehicles/')
//       .then(response => response.json())
//       .then(data => setVehicles(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Select Vehicle</h2>
//       {vehicles.map((vehicle) => (
      
//         <div key={vehicle.id}>
//           <input
//             type="radio"
//             id={vehicle.id}
//             name="vehicle"
//             value={vehicle.type_of_vehicle}
//             onChange={() => setSelectedVehicle(vehicle)}
//           />
//           <label htmlFor={vehicle.id}>{vehicle.type_of_vehicle}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VehicleSelector;

import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const VehicleSelector = ({ selectedVehicle, setSelectedVehicle }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Form>
      <Form.Group controlId="vehicleSelector">
        <Form.Label>Select Vehicle</Form.Label>
        <Form.Control
          as="select"
          value={selectedVehicle ? selectedVehicle.id : ''}
          onChange={(e) => {
            const vehicleId = e.target.value;
            const selectedVehicle = vehicles.find(vehicle => vehicle.id === parseInt(vehicleId));
            setSelectedVehicle(selectedVehicle);
          }}
        >
          <option value="">Choose a vehicle...</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.type_of_vehicle} of speed {vehicle.top_speed} km/hr
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default VehicleSelector;

