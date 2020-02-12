import React from "react";

const Marquee = React.forwardRef(({ progress, width }, ref) => {
  return (
    <div
      style={{
        padding: "100px 0",
        width: "100%",
        position: "relative",
        minHeight: "169px",
      }}
    >
      <h1
        ref={ref}
        style={{
          position: "absolute",
          left: "100%",
          whiteSpace: "nowrap",
          fontSize: "144px",
          top: 0,
          transform: `translateX(-${progress * width}px)`,
        }}
      >
        REAL, STRAIGHTFORWARD, UNFILTERED
      </h1>
    </div>
  );
});

export default Marquee;
