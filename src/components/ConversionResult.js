// import React from 'react';

// const ConversionResult = ({ time, fuelConsumption, isOutOfRange }) => (
//   <div>
//     <h3>Conversion Result</h3>
//     <p>Time: {time.hours} hours, {time.minutes} minutes, {time.seconds} seconds</p>
//     <p>Fuel Consumption: {fuelConsumption} liters</p>
//     {isOutOfRange && <p style={{ color: 'red' }}>Out of Range</p>}
//   </div>
// );

// export default ConversionResult;


import React from 'react';
import { Alert } from 'react-bootstrap';

const ConversionResult = ({ time, fuelConsumption, isOutOfRange }) => (
  <Alert variant={isOutOfRange ? 'danger' : 'success'}>
    <h4>Conversion Result</h4>
    <p>Time: {`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}</p>
    <p>Fuel Consumption: {isOutOfRange ? 'Out of Range' : `${fuelConsumption} liters`}</p>
  </Alert>
);

export default ConversionResult;
