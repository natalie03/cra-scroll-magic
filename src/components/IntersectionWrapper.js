import React, { useState } from "react";
import useIntersect from "../helpers/useIntersect";

const IntersectionWrapper = ({ children }) => {
  const [inView, setInView] = useState(false);

  const [ref, data] = useIntersect({
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    callbackWhenInView: setInView,
  });

  return (
    <div ref={ref}>
      {React.cloneElement(children, { inView: inView, data: data })}
    </div>
  );
};

export default IntersectionWrapper;
