import React from "react";
import styled from "styled-components";

const TweenStyled = styled.div`
  .section {
    border: solid green 1px;
  }
`;

const ZoomKitten = React.forwardRef(({ progress }, ref) => {
  return (
    <TweenStyled>
      <div 
        id="customactions"
        ref={ref}
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
    </TweenStyled>
  );
});

export default ZoomKitten;