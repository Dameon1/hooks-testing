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
   
  </div>
  )
}

export default Header;