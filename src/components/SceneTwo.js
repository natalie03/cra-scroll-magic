import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import useWindowDimensions from "./WindowDimensions";

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

// const useAnimationFrame = callback => {
//   // Use useRef for mutable variables that we want to persist
//   // without triggering a re-render on their change
//   const requestRef = React.useRef();
//   const previousRef = React.useRef();

//   const animate = current => {
//     if (previousRef.current != undefined) {
//       const delta = current - previousRef.current;
//       callback(delta);
//     }
//     previousRef.current = current;
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   React.useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []); // Make sure the effect runs only once
// };
const initMargin = 100;
const SceneTwo = () => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(initMargin);
  const { viewHeight, viewWidth } = useWindowDimensions();

  return (
    <TweenStyled>
      <div className="section" />
      <div id="trigger" />
      <Controller>
        <Scene triggerElement="#trigger" duration={500} pin>
          {progress => {
            // window.requestAnimationFrame()
            // useAnimationFrame(deltaTime => {
            //   // Pass on a function to the setter of the state
            //   // to make sure we always have the latest state

            // setPosition(progress);

            //   // setCount(prevCount => (prevCount + deltaTime * 0.01) % 100)
            // });
            // if (enter[0]) setPosition(enter[0].progress);
            // enter ? console.log([enter]) : null;
            setPosition(progress);
            setMarginLeft(initMargin * (1 - progress));
            return (
              <div id="customactions">
                <label>progress: </label>
                <code id="progress">{position.toFixed(3)}</code>
                <div>
                  <h1
                    style={{
                      marginLeft: `${marginLeft}vw`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    REAL, STRAIGHTFORWARD, UNFILTERED
                  </h1>
                  <p style={{ opacity: position }}>
                    Here's some other cool content we can talk about.
                  </p>
                </div>
              </div>
            );
          }}
        </Scene>
      </Controller>
      <div className="section" />
    </TweenStyled>
  );
};

export default SceneTwo;