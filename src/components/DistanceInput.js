// import React from 'react';

// const DistanceInput = ({ distance, setDistance }) => (
//   <div>
//     <label htmlFor="distance">Distance (km): </label>
//     <input
//       id="distance"
//       type="number"
//       value={distance}
//       onChange={(e) => setDistance(e.target.value)}
//     />
//   </div>
// );

// export default DistanceInput;


import React from 'react';
import { Form } from 'react-bootstrap';

const DistanceInput = ({ distance, setDistance }) => (
  <Form>
    <Form.Group controlId="distance">
      <Form.Label>Distance</Form.Label>
      <Form.Control
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Enter distance"
      />
    </Form.Group>
  </Form>
);

export default DistanceInput;
