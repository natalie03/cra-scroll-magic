import { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const useIntersect = ({
  root = null,
  rootMargin,
  threshold = 0,
  callbackWhenInView,
  callbackPrevIntersect,
}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);
  const ref = useRef();
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        ref.current = entry.intersectionRatio;
        if (entry.intersectionRatio > 0) {
          callbackWhenInView(true);
          callbackPrevIntersect(ref.current);
          console.log("aloha");
        }
        console.log(entry.intersectionRatio);
        console.log(ref.current);
        if (
          entry.interseactionRatio > 0 &&
          ref.current < entry.intersectionRatio
        ) {
          console.log("starting to enter");
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

  return [setNode, entry, ref.current];
};

export default useIntersect;
