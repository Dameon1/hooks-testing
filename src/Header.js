import React from 'react';
import { Link } from "react-router-dom";


function Header(){
  return (
  <div className="header">
  <Link to="/">
    <button className="linkButton">BallResizer</button>
  </Link>
  <Link to="/demo1">
    <button className="linkButton">useState</button>
  </Link>
  <Link to="/demo2">
    <button className="linkButton">useEffect</button>
  </Link>
  <Link to="/loginPage">
    <button className="linkButton">Login</button>
  </Link>
  <Link to="/loginPage">
    <button className="linkButton">Login</button>
  </Link>
  <Link to="/loginPage">
    <button className="linkButton">Login</button>
  </Link>  
  </div>
  )
}

export default Header;