import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import './App.css';

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";

function App() {
  return (
    <div className="App">
      <Controller>
        <Scene duration={700} pin>
          <SceneOne />
        </Scene>
        <div id="trigger" />
        <Scene triggerElement="#trigger" duration={500} pin>
          {progress => (
            <SceneTwo progress={progress} />
          )}
        </Scene>
        <div id="triggerTwo" />
        <Scene triggerElement="#triggerTwo" triggerHook={.25} duration={500} pin>
          {progress => (
            <SceneThree progress={progress} />
          )}
        </Scene>
        <Scene duration={600} pin>
        {progress => (
          <SceneFour progress={progress} />
        )}
        </Scene>
      </Controller>
    </div>
  );
}

export default App;
