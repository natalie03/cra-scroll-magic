import React, { useState, useEffect } from "react";

const style = {
  height: "70vh",
  border: "solid purple 1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px"
};

const SceneFour = ({ progress }) => {
  const [triggered, setTriggered] = useState(false)
  useEffect(() => {
    if (progress > 0.25 && !triggered) {
      setTriggered(true);
    }
  }, [progress, triggered]);
  return (
    <div style={style}>
      <code id="progress">{triggered ? 'I am triggered' : 'I am not'}</code>
    </div>
)};

export default SceneFour;