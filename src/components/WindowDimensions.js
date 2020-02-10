import { useState, useEffect } from "react";

function getWindowDimens() {
  if (typeof window === "undefined") {
    global.window = {};
  }
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimens() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimens());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimens());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}