import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawDots } from "redux_toolkit/drawingSlice";

export const useDrawingDots = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const dots = useSelector((state) => state.drawing.dots);
  const [position, setPosition] = useState({});

  const DotMouseEvents = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const dot = {
      x: offsetX,
      y: offsetY,
      color: currentColor,
    };

    if (offsetX === position.x && offsetY === position.y) {
      return;
    }

    if (event.type === "mousedown") {
      setPosition(dot);
      dispatch(drawDots(dot));
    }
  };

  const dotDraw = (context) => {
    dots.forEach((dot) => {
      // 동그란 점 찍기
      context.beginPath();
      context.arc(dot.x, dot.y, 2, 0, 2 * Math.PI);
      context.strokeStyle = dot.color;
      context.stroke();
      context.fillStyle = dot.color;
      context.fill();
    });
  };

  return { DotMouseEvents, dotDraw };
};
