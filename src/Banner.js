import React, {useState} from 'react';

export default function Banner(){
  const colors = ["green","blue","red","orange"];
  const [backgroundColor,setBackgroundColor] = useState("blue");
  return (
  <div className={backgroundColor}>
    <p>Some Text</p>
    <button onClick={()=> {
      
      setBackgroundColor(colors[Math.floor(Math.random()*4)])}
    }
      >Change Color</button>
  </div>
  )
}