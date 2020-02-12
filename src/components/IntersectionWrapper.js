import React, { useState } from "react";
import useIntersect from "../helpers/useIntersect";

const IntersectionWrapper = ({ name, children }) => {
  const [inView, setInView] = useState(false);

  const [ref, entry] = useIntersect({
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    callbackWhenInView: setInView,
  });

  return (
    <div ref={ref}>
      {React.cloneElement(children, { inView: inView, entry: entry })}
    </div>
  );
};

export default IntersectionWrapper;
