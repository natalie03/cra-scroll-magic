import React from 'react';
import logo from './logo.svg';
import './App.css';

import SceneOne from "./components/SceneOne";
import SceneTwo from "./components/SceneTwo";
import SceneThree from "./components/SceneThree";


function App() {
  return (
    <div className="App">
      <p>Hello Next.js</p>
      <SceneOne />
      <SceneTwo />
      <SceneThree />
    </div>
  );
}

export default App;
