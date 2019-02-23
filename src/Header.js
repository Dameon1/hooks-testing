import React from 'react';
import { Link } from "react-router-dom";


function Header(){
  return (
  <div className="header">
  <Link to="/">
    <button className="linkButton">BallResizer</button>
  </Link>
  <Link to="/use-state">
    <button className="linkButton">useState</button>
  </Link>
  <Link to="/use-effect">
    <button className="linkButton">useEffect</button>
  </Link>
  <Link to="/use-context">
    <button className="linkButton">useContext</button>
  </Link>
  <Link to="/use-ref">
    <button className="linkButton">useRef</button>
  </Link>
  <Link to="/render-prop">
    <button className="linkButton">renderProp</button>
  </Link>
  <Link to="/traffic-light">
    <button className="linkButton">TrafficLight</button>
  </Link>
  <Link to="/use-local-storage">
    <button className="linkButton">LocalStorage</button>
  </Link>
  <Link to="/form-example">
    <button className="linkButton">FormExample</button>
  </Link>   
  <Link to="/custom">
    <button className="linkButton">CustomHook</button>
  </Link>   
  </div>
  )
}

export default Header;