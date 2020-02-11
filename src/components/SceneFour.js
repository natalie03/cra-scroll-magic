import React from "react";

const style = {
  height: "70vh",
  border: "solid purple 1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px"
};

const SceneFour = ({ progress, inView }) => {
  return (
    <div style={style}>
      <code id="progress">{inView ? 'I am in view' : 'I am not'}</code>
    </div>
)};

export default SceneFour;