import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";
import Header from './Header';
import { BallResizer } from "./BallResizer";
import  Demo1  from './Demo1';
import  Demo2  from './Demo2';


function App() {
  return (
   
    
    <div className="App">
      <Header />
      <Route exact path="/" component={BallResizer} />
      <Route exact path="/demo2" component={Demo2} />
      <Route exact path="/demo1" component={Demo1} />
     
    </div>
    
  );
}

export default App;