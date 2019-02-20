import React from  'react';

import {useTrafficLight} from 'react-hooks-helper';

const Light = ({ color, active }) => (
  <div
    className="light"
    style={{ backgroundColor: color, opacity: active ? 1 : 0.4 }}
  />
);


const TrafficLight = ({ initialColor }) => {
  const colorIndex = useTrafficLight(initialColor, [5000, 4000, 1000]);

  return (
    <>
      <div className="traffic-light">
      <p>TrafficLight</p>
        <Light color="#f00" active={colorIndex === 0} />
        <Light color="#ff0" active={colorIndex === 2} />
        <Light color="#0c0" active={colorIndex === 1} />
      </div>
    </>
  );
};

export default TrafficLight;