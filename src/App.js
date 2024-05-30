// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import DistanceInput from './components/DistanceInput';
// import VehicleSelector from './components/VehicleSelector';
// import ConversionResult from './components/ConversionResult';
// import ComparisonTable from './components/ComparisonTable';
// import './App.css';
// import './bootstrap.min.css'
// function convertTime(distance, selectedVehicle) {
//   const hours = distance / selectedVehicle.top_speed;
//   const wholeHours = Math.floor(hours);
//   const fractionalHours = hours - wholeHours;

//   const minutes = fractionalHours * 60;
//   const wholeMinutes = Math.floor(minutes);
//   const fractionalMinutes = minutes - wholeMinutes;

//   const seconds = fractionalMinutes * 60;

//   return {
//     hours: wholeHours,
//     minutes: wholeMinutes,
//     seconds: Math.round(seconds)
//   };
// }

// function convertFuelConsumption(distance, selectedVehicle) {
//   return (distance / selectedVehicle.fuel_efficiency).toFixed(3);
// }

// function App() {
//   const [distance, setDistance] = useState('');
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [time, setTime] = useState(null);
//   const [fuelConsumption, setFuelConsumption] = useState(null);
//   const [isOutOfRange, setIsOutOfRange] = useState(false);

//   useEffect(() => {
//     fetch('/api/vehicles/')
//       .then(response => response.json())
//       .then(data => setVehicles(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const calculate = () => {
//     if (selectedVehicle && distance) {
//       const time = convertTime(distance, selectedVehicle);
//       const fuelConsumption = convertFuelConsumption(distance, selectedVehicle);
//       const isOutOfRange = distance > selectedVehicle.max_range;

//       setTime(time);
//       setFuelConsumption(fuelConsumption);
//       setIsOutOfRange(isOutOfRange);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <DistanceInput distance={distance} setDistance={setDistance} />
//         <VehicleSelector selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
//         <button onClick={calculate}>Calculate</button>
//         {time !== null && selectedVehicle && (
//           <ConversionResult
//             time={time}
//             fuelConsumption={fuelConsumption}
//             isOutOfRange={isOutOfRange}
//           />
//         )}
//         <ComparisonTable distance={distance} vehicles={vehicles} />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import DistanceInput from './components/DistanceInput';
import VehicleSelector from './components/VehicleSelector';
import ConversionResult from './components/ConversionResult';
import ComparisonTable from './components/ComparisonTable';
import './App.css';
import './bootstrap.min.css';

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

function App() {
  const [distance, setDistance] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [time, setTime] = useState(null);
  const [fuelConsumption, setFuelConsumption] = useState(null);
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  useEffect(() => {
    fetch('/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const calculate = () => {
    if (selectedVehicle && distance) {
      const time = convertTime(distance, selectedVehicle);
      const fuelConsumption = convertFuelConsumption(distance, selectedVehicle);
      const isOutOfRange = distance > selectedVehicle.max_range;

      setTime(time);
      setFuelConsumption(fuelConsumption);
      setIsOutOfRange(isOutOfRange);
    }
  };

  return (
    <div className="App">
      <Header />
      <Container className="my-4">
        <Row className="mb-4">
          <Col>
            <DistanceInput distance={distance} setDistance={setDistance} />
          </Col>
          <Col>
            <VehicleSelector
              selectedVehicle={selectedVehicle}
              setSelectedVehicle={setSelectedVehicle}
            />
          </Col>
        </Row>
        <Button variant="primary" onClick={calculate}>Calculate</Button>
        {time !== null && selectedVehicle && (
          <ConversionResult
            time={time}
            fuelConsumption={fuelConsumption}
            isOutOfRange={isOutOfRange}
          />
        )}
        <ComparisonTable distance={distance} vehicles={vehicles} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

