import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import './App.css';

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";

const App = () => (
    <div className="App">
      <Controller>
        <Scene duration={700} pin>
          <div><SceneOne /></div>
        </Scene>
        <div id="trigger" />
        <Scene triggerElement="#trigger" duration={500} pin>
          {progress => (
            <div>
              <SceneTwo progress={progress} />
            </div>
          )}
        </Scene>
        <div id="triggerTwo" />
        <Scene triggerElement="#triggerTwo" triggerHook={.25} duration={500} pin>
          {progress => (
            <div>
              <SceneThree progress={progress} />
            </div>
          )}
        </Scene>
        <Scene duration={600} pin>
        {progress => (
          <div>
            <SceneFour progress={progress} />
          </div>
        )}
        </Scene>
      </Controller>
    </div>
);

export default App;
