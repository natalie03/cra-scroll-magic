import React, { useState, useEffect } from "react";

const initMargin = 100;

const SceneTwo = ({ progress }) => {
  const [marginLeft, setMarginLeft] = useState(false);
  const [initiated, setInitiated] = useState(false);
  //TODO: should use transform instead of margin
  
  useEffect(() => {
      setMarginLeft(initMargin * (1 - progress));
  }, [progress, initiated, setInitiated]);
  return (
    <div id="customactions" style={{padding: '100px 0'}}>
      <div>
        <h1
          style={{
            marginLeft: `${marginLeft}vw`,
            whiteSpace: "nowrap",
            fontSize: '144px'
          }}
        >
          REAL, STRAIGHTFORWARD, UNFILTERED
        </h1>
      </div>
    </div>
  );
};

export default SceneTwo;