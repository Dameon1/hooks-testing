import React, { useState, useRef } from "react";

function UseRef() {
  let [name, setName] = useState("Nate");

  let nameRef = useRef();

  const handleChange = () => {
    setName(nameRef.current.value);
  };

  return (
    <div>
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" onChange={handleChange} />
        <button type="button" onClick={handleChange}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default UseRef;
