import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";
import Header from './Header';
import { BallResizer } from "./BallResizer";
import  UseState  from './UseState';
import  UseEffect  from './UseEffect';
import UseContext from './UseContext';

function App() {
  return (
   
    
    <div className="App">
      <Header />
      <Route exact path="/" component={BallResizer} />
      <Route exact path="/use-state" component={UseState} />
      <Route exact path="/use-effect" component={UseEffect} />
      <Route exact path="/use-context" component={UseContext} />
     
    </div>
    
  );
}

export default App;