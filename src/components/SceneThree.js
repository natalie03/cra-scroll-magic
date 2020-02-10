import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

const TweenStyled = styled.div`
  .section {
    height: 50vh;
    border: solid green 1px;
  }
`;

const initMargin = 100;
const SceneThree = () => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(initMargin);

  return (
    <TweenStyled>
      <div className="section" />
      <div id="triggerTwo" />
      <Controller>
        <Scene triggerElement="#triggerTwo" duration={500} pin>
          {progress => {
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
                  <p>Here's some other cool content we can talk about.</p>
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

export default SceneThree;