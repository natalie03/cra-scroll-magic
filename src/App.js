import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./App.css";
import useWindowDimens from "./components/WindowDimensions";
import useIntersect from "./helpers/intersectObserver";
import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";

const IntersectionScene = props => {
  const [state, toggle] = useState(props.initial || 0);

  const [ref, entry] = useIntersect({
    threshold: 0,
  });

  const Component = compToRender[state];

  const componentName = state === 0 ? "FadeBox" : "WidthBox";

  return (
    <Component {...props} ref={ref} ratio={entry.intersectionRatio}>
      intersectionRatio: {format(entry.intersectionRatio)}
      <Button onClick={() => toggle(state === 0 ? 1 : 0)}>
        Switch to {componentName}
      </Button>
    </Component>
  );
};

const App = () => {
  const dimens = useWindowDimens();
  console.log(dimens);
  return (
    <div className="App">
      <Controller>
        <Scene duration={700} pin>
          <div>
            <SceneOne />
          </div>
        </Scene>
        <div id="trigger" />
        <Scene triggerElement="#trigger" duration={500} pin>
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
            );
          }}
        </Scene>
        <div id="triggerTwo" />
        <Scene
          triggerElement="#triggerTwo"
          triggerHook={0.25}
          duration={500}
          pin
        >
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
};

export default App;
