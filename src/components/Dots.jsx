import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawDots } from "redux_toolkit/drawingSlice";

export default function Dots() {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const dots = useSelector((state) => state.drawing.dots);
  const [position, setPosition] = useState({});
  const canvasRef = useRef(null);

  const handleMouseEvents = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const dot = {
      x: offsetX,
      y: offsetY,
      color: currentColor,
    };

    if (offsetX === position.x && offsetY === position.y) {
      return;
    }

    setPosition(dot);
    dispatch(drawDots(dot));
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    dots.forEach((dot) => {
      // 동그란 점 찍기
      context.beginPath() ;
      context.arc(dot.x, dot.y, 2, 0, 2*Math.PI);
      context.stroke();
      context.fillStyle = dot.color;
      context.fill();
    })
  }, [dots]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="500"
        height="500"
        onMouseDown={handleMouseEvents}
        className="cursor-crosshair border border-solid border-black"
      ></canvas>
    </div>
  );
}
