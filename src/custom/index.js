import React from "react";
import { useWindowResize } from "./useWindowResize";


export default function Custom() {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h1>
        <span role="img" aria-label="Left Right Arrow">
          ↔️
        </span>{" "}
        width: {width}px
      </h1>
      <h1>
        <span role="img" aria-label="Up Down Arrow">
          ↕️
        </span>{" "}
        height: {height}px
      </h1>
      <p>Resize the window to update the values</p>
    </div>
  );
}