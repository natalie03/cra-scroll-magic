import React, { useState } from 'react';
import { Controller, Scene } from "react-scrollmagic";
import './App.css';

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";
import useIntersect from "./helpers/useIntersect";


const IntersectionWrapper = ({ name, children }) => {
  const [inView, setInView] = useState(false);

  const [ref, entry] = useIntersect({
    root: null,
    threshold: 0,
    rootMargin: '0px 0px 0px 0px',
    callbackWhenInView: setInView
  });

  return (
    <div ref={ref}>
      {React.cloneElement(children, { inView: inView })}
    </div>
  );
};


const App = () => (
  <div className="App">
    <Controller>
      <Scene duration={500} pin>
        {(progress) => {
          return (
            <div>
              <IntersectionWrapper>
                <SceneOne />
              </IntersectionWrapper>
            </div>)
        }}
      </Scene>
      <Scene triggerHook={0} duration={500} pin>
        {(progress, event) => {
          return (
            <div>
              <IntersectionWrapper>
                <SceneTwo progress={progress} />
              </IntersectionWrapper>
            </div>
        )}}
      </Scene>
      <Scene triggerHook={0} duration={500} pin>
        {progress => (
          <div>
            <IntersectionWrapper>
              <SceneThree progress={progress} />
            </IntersectionWrapper>
          </div>
        )}
      </Scene>
      <Scene triggerHook={0} duration={500} pin>
      {progress => (
        <div>
          <IntersectionWrapper>
            <SceneFour progress={progress} />
            </IntersectionWrapper>
          </div>
        )}
        </Scene>
    </Controller>
  </div>
);

export default App;
