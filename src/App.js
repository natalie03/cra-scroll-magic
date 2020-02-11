import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import './App.css';

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";

import useWindowDimens from './components/WindowDimensions';

const App = () => {
  const {width, height} = useWindowDimens();

  return(
    <div className="App">
      <Controller>
        <Scene duration={height} pin>
          {(progress) => {
            return <div><SceneOne /></div>
          }}
        </Scene>
        <Scene triggerHook={0} duration={height} pin>
          {(progress, event) => {
              if (event.type === "enter") {
                console.log("I am entering");
              }
              if (event.type === "leave") {
                console.log("I am leaving");
              }
           return (
              <div>
                <SceneTwo progress={progress} />
              </div>
          )}}
        </Scene>
        <Scene triggerHook={0} duration={height} pin>
          {progress => (
            <div>
              <SceneThree progress={progress} />
            </div>
          )}
        </Scene>
        <Scene triggerHook={0} duration={height} pin>
        {progress => (
          <div>
            <SceneFour progress={progress} />
          </div>
        )}
        </Scene>
      </Controller>
    </div>
);
}

export default App;
