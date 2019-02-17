import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { BallResizer } from './BallResizer';

function App() {
  return (
    <div className="App">
    <BallResizer
      initialSize={200}
      minSize={150}
      maxSize={250}
      />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));



