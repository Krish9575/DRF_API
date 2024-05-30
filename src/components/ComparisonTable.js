// import React from 'react';

// function convertTime(distance, vehicle) {
//   const hours = distance / vehicle.top_speed;
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

// function convertFuelConsumption(distance, vehicle) {
//   return (distance / vehicle.fuel_efficiency).toFixed(3);
// }

// const ComparisonTable = ({ distance, vehicles }) => (
//   <div>
//     <h2>Comparison with Other Modes</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Vehicle</th>
//           <th>Time (hours, minutes, seconds)</th>
//           <th>Fuel Consumption (liters)</th>
//         </tr>
//       </thead>
//       <tbody>
//         {vehicles.map((vehicle) => {
//           const time = convertTime(distance, vehicle);
//           const fuelConsumption = convertFuelConsumption(distance, vehicle);
//           const isOutOfRange = distance > vehicle.max_range;

//           return (
//             <tr key={vehicle.id}>
//               <td>{vehicle.type_of_vehicle}</td>
//               <td>{`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}</td>
//               <td>{isOutOfRange ? 'Out of Range' : fuelConsumption}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   </div>
// );

// export default ComparisonTable;




import React from 'react';
import { Table, Container } from 'react-bootstrap';

function convertTime(distance, vehicle) {
  const hours = distance / vehicle.top_speed;
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

function convertFuelConsumption(distance, vehicle) {
  return (distance / vehicle.fuel_efficiency).toFixed(3);
}

const ComparisonTable = ({ distance, vehicles }) => (
  <Container>
    <h2 className="my-4">Comparison with Other Modes</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Time (hours, minutes, seconds)</th>
          <th>Fuel Consumption (liters)</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => {
          const time = convertTime(distance, vehicle);
          const fuelConsumption = convertFuelConsumption(distance, vehicle);
          const isOutOfRange = distance > vehicle.max_range;

          return (
            <tr key={vehicle.id}>
              <td>{vehicle.type_of_vehicle}</td>
              <td>{`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}</td>
              <td>{isOutOfRange ? 'Out of Range' : fuelConsumption}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </Container>
);

export default ComparisonTable;

