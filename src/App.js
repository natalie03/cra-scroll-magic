import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./App.css";

import {
  Marquee,
  ZoomKitten,
  ViewTrigger,
  IntersectionWrapper,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Controller>
        <Scene triggerElement="#whatever" duration={1656} pin>
          {(progress, event) => {
            return (
              <div>
                <Marquee progress={progress} />
              </div>
            );
          }}
        </Scene>
        <Scene triggerHook={0} duration={1000} pin>
          {progress => (
            <div>
              <IntersectionWrapper>
                <ZoomKitten progress={progress} />
              </IntersectionWrapper>
            </div>
          )}
        </Scene>
        <Scene triggerHook={0} duration={500} pin>
          {progress => (
            <div>
              <IntersectionWrapper>
                <ViewTrigger progress={progress} />
              </IntersectionWrapper>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default App;
