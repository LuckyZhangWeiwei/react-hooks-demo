import { useState, useRef, useLayoutEffect } from "react";

function useDrag() {
  const positionRef = useRef({
    currentX: 0,
    currentY: 0,
    lastX: 0,
    lastY: 0,
  });

  const domRef = useRef(null); // domRef.current 为div的真实dom元素

  const [, forceUpdate] = useState({});

  useLayoutEffect(() => {
    let startX, startY;
    const start = (event) => {
      const { clientX, clientY } = event.targetTouches[0];
      startX = clientX;
      startY = clientY;

      domRef.current.addEventListener("touchmove", move);
      domRef.current.addEventListener("touchend", end);
    };
    const move = (event) => {
      const { clientX, clientY } = event.targetTouches[0];
      positionRef.current.currentX =
        positionRef.current.lastX + (clientX - startX);
      positionRef.current.currentY =
        positionRef.current.lastY + (clientY - startY);

      forceUpdate({});
    };
    const end = () => {
      positionRef.current.lastX = positionRef.current.currentX;
      positionRef.current.lastY = positionRef.current.currentY;
      domRef.current.removeEventListener("touchmove", move);
      domRef.current.removeEventListener("touchend", end);
    };
    domRef.current.addEventListener("touchstart", start);
  }, []);

  let style = {
    x: positionRef.current.currentX,
    y: positionRef.current.currentY,
  };

  return [style, domRef];
}

export default useDrag;
