import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TweenStyled = styled.div`
  .section {
    height: 50vh;
    border: solid orange 1px;
  }
  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    border: solid green 1px;
    position: relative;
  }
`;

const initMargin = 100;
const SceneTwo = ({ progress }) => {
  const [marginLeft, setMarginLeft] = useState(false)
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