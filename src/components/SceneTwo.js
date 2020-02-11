import React, { useState } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

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
const SceneTwo = ({ progress }) => {
  let marginLeft= initMargin * (1 - progress);
  return (
    <TweenStyled>
      <div className="section" />
        <div id="customactions">
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
      <div className="section" />
    </TweenStyled>
  );
};

export default SceneTwo;