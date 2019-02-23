import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";
import Header from "./Header";
import { BallResizer } from "./BallResizer";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseRef from "./UseRef";
import Banner from './Banner';
import RenderProp from './RenderProp';
import TrafficLight from "./TrafficLight";
import LocalStorage from "./LocalStorage";
import FormDisplay from "./forms";
import Custom from "./custom"


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Route exact path="/" component={BallResizer} />
      <Route exact path="/use-state" component={UseState} />
      <Route exact path="/use-effect" component={UseEffect} />
      <Route exact path="/use-context" component={UseContext} />
      <Route exact path="/use-ref" component={UseRef} />
      <Route exact path="/render-prop" component={RenderProp} />      
      <Route exact path="/traffic-light" component={TrafficLight} />      
      <Route exact path="/use-local-storage" component={LocalStorage} />      
      <Route exact path="/form-example" component={FormDisplay} />      
      <Route exact path="/custom" component={Custom} />      
    </div>
  );
}

export default App;
