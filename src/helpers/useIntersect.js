import { useEffect, useRef, useState } from "react";

const useIntersect = ({
  root = null,
  rootMargin,
  threshold = 0,
  callbackWhenInView,
}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          callbackWhenInView(true);
        }
        if (entry.intersectionRatio === 0) {
          callbackWhenInView(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};

export default useIntersect;
