import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const style = {
  height: "70vh",
  border: "solid blue 1px",
};

const SceneOne = () => (
  <div style={style}>
    <Controller>
      <Scene duration={700} pin>
        <div>Stickyyy</div>
      </Scene>
    </Controller>
  </div>
);

export default SceneOne;