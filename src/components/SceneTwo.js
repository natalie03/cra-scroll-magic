import React, { useState, useEffect } from "react";

const initMargin = 100;

const SceneTwo = ({ progress }) => {
  const [marginLeft, setMarginLeft] = useState(false);
  //TODO: should use transform instead of margin
  
  useEffect(() => {
      setMarginLeft(initMargin * (1 - progress));
  }, [progress]);
  return (
    <div id="customactions" style={{padding: '100px 0'}}>
      <label>progress: </label>
      <div>
        <h1
          style={{
            marginLeft: `${marginLeft}vw`,
            whiteSpace: "nowrap",
          }}
        >
          REAL, STRAIGHTFORWARD, UNFILTERED
        </h1>
        <p>
          Here's some other cool content we can talk about.
        </p>
      </div>
    </div>
  );
};

export default SceneTwo;