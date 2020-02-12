
import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./App.css";

import {
  Marquee,
  ZoomKitten,
  ViewTrigger,
  IntersectionWrapper,
} from "./components";

import { useDimensions } from './helpers';

const App = () => {
  const [marqueeRef, marqueeSize] = useDimensions();

  return (
  <div className='App'>
    <Controller>
      <img src="https://www.placecage.com/c/800/600" />
      <Scene triggerHook={0} duration={marqueeSize.width || 0 } pin>
        {progress => {
          return (
            <div>
              <Marquee ref={marqueeRef} progress={progress} width={marqueeSize.width} />
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
