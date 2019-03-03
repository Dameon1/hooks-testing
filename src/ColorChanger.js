import React, { useState } from "react";

export default function ColorChanger() {
  const colors = ["green", "blue", "red", "orange"];
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <>
      <div className="color" style={{backgroundColor:backgroundColor}}>
        <p>Some Text</p>
       
      </div>
      <button
          onClick={() => {
            setBackgroundColor(colors[Math.floor(Math.random() * 4)]);
          }}
        >
          Change Color
        </button>
    </>
  );
}
