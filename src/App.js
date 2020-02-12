import React, { useState } from "react";
import "./App.css";

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";
import useIntersect from "./helpers/useIntersect";

const Scene = ({ name, children }) => {
  const [inView, setInView] = useState(false);
  const [prevIntersect, setPrevIntersect] = useState(0);

  const [ref, entry, prevRef] = useIntersect({
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    callbackWhenInView: setInView,
    callbackPrevIntersect: setPrevIntersect,
  });

  // setPrevIntersect(prevRef);

  return (
    <div
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
    >
      {/* {console.log(prevIntersect)}
      {console.log(prevRef)}
      {console.log(entry.intersectionRatio)} */}
      {children}
    </div>
  );
};

const App = () => (
  <div className="App">
    <Scene name="Scene 1">
      <SceneOne />
    </Scene>
    {/* <Scene name="Scene 2">
      <SceneTwo />
    </Scene> */}
    <Scene name="Scene 3">
      <SceneThree />
    </Scene>
  </div>
);

export default App;
