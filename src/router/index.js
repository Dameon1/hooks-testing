// https://github.com/react-spring/react-spring/issues/448#issuecomment-460598042

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import useRouter from './UseRouter'
import './styles.css'

export default function RouterExample() {
  const  location  = window.location;
  console.log(location)
  const transitions = useTransition(location, location => location.href, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
    <p>working</p>
      
        <Route path="/" exact component={A} />
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
   
    </animated.div>
  ))
}

const A = () => (
  <div style={{ background: 'lightpink' }}>
    <Link to="/b">
    <button>A</button></Link>
  </div>
)

const B = () => (
  <div style={{ background: 'lightblue' }}>
    <Link to="/c">B</Link>
  </div>
)

const C = () => (
  <div style={{ background: 'lightgreen' }}>
    <Link to="/a">C</Link>
  </div>
)


