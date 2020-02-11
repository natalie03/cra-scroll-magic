import React, { useState } from "react";
import "./App.css";

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";
import useIntersect from "./helpers/useIntersect";

const Scene = ({ name, children }) => {
  const [inView, setInView] = useState(false);

  const [ref, entry] = useIntersect({
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    callbackWhenInView: setInView,
  });

  return (
    <div
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
    >
      {children}
    </div>
  );
};

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
      <Scene name="Scene 1">
        <SceneOne />
      </Scene>
      <Scene name="Scene 2">
        <SceneTwo />
      </Scene>
      <Scene name="Scene 3">
        <SceneThree />
      </Scene>
    </div>
  );
};

export default App;
