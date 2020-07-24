import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReverseTest from './RevTest.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Test App</h1>
      </header>
      <body>
        <ReverseTest />
      </body>
    </div>
  );
}

export default App;
