import React, { useState, useCallback } from "react";

import { Ball } from "./Ball";

const BallResizer = ({
  initialSize=200,
        minSize=150,
        maxSize=250
 
}) => {
  const [ballSize, setBallSize] = useState(initialSize);
  const handleChange = useCallback(event => {
    setBallSize(event.target.value);
  });

  return (
    <>
      <Ball size={ballSize} />
      <input
        type="range"
        className="slider"
        min={minSize}
        max={maxSize}
        value={ballSize}
        onChange={handleChange}
      />
    </>
  );
};

export { BallResizer };
