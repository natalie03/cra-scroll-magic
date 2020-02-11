import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

const TweenStyled = styled.div`
  .section {
    border: solid green 1px;
  }
`;

const SceneThree = () => {
  return (
    <TweenStyled>
      <div className="section" />
      <div id="triggerTwo" />
      <Controller>
        <Scene triggerElement="#triggerTwo" triggerHook={.25} duration={500} pin>
          {progress => {
            return (
              <div 
                id="customactions"
                style={{
                  backgroundImage: "url('http://placekitten.com/550/650')",
                  minHeight: '75vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div>
                  <img
                    alt=""
                    src="http://placekitten.com/200/200"
                    style={{
                      transform: `scale(${progress})`
                    }}
                   />
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