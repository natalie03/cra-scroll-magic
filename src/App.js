import React from 'react';

import './App.css';

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";

function App() {
  return (
    <div className="App">
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <SceneFour />
    </div>
  );
}

export default App;
