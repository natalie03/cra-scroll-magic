import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./App.css";

import {
  Marquee,
  ZoomKitten,
  ViewTrigger,
  IntersectionWrapper,
} from "./components";

import { useDimensions } from "./helpers";

const App = () => {
  const [marqueeRef, marqueeSize] = useDimensions();
  const [kittenRef, kittenSize] = useDimensions();
  const [imageRef, imageSize] = useDimensions();

  let sceneHeight =
    marqueeSize.width + kittenSize.height + imageSize.height || 0;

  return (
    <div className="App">
      <Controller>
        <Scene
          triggerHook={0}
          offset={kittenSize.height ? kittenSize.height / 2 : 0}
          duration={sceneHeight}
          pin
        >
          {progress => {
            return (
              <div>
                <img ref={imageRef} src="https://www.placecage.com/c/800/600" />
                <Marquee
                  ref={marqueeRef}
                  progress={progress}
                  width={marqueeSize.width}
                />
                <Controller>
                  <Scene duration={600}>
                    {progressNested => {
                      return (
                        <ZoomKitten ref={kittenRef} progress={progressNested} />
                      );
                    }}
                  </Scene>
                </Controller>
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
