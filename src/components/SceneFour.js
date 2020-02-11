import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";

const style = {
  height: "70vh",
  border: "solid purple 1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const SceneFour = () => {
  const [position, setPosition] = useState(0);
  const [triggered, setTriggered] = useState(false)
  useEffect(() => {
    if (position > 0.25 && !triggered) {
      setTriggered(true);
    }
  }, [position, triggered]);
  return (
    <div style={style}>
      <Controller>
        <Scene duration={600} pin>
        {progress => {
            setPosition(progress);
            return (
              <code id="progress">{triggered ? 'I am triggered' : 'I am not'}</code>
            )
          }}
        </Scene>
      </Controller>
    </div>
)};

export default SceneFour;