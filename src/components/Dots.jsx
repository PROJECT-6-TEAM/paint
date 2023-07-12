import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawDots } from "redux/paintingSlice";

export default function Dots() {
  const dispatch = useDispatch();
  const dots = useSelector((state) => state.painting.dots);
  const [painting, setPainting] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    dots.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.fillRect(dot.x, dot.y, 1, 1);
    });
  }, [dots]);

  const startPainting = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setPainting(true);
    setPosition({ x: offsetX, y: offsetY });
  };
  const draw = (event) => {
    if (!painting) return;
    const { offsetX, offsetY } = event.nativeEvent;
    if (offsetX === position.x && offsetY === position.y) {
      return;
    }
    const dot = {
      x: offsetX,
      y: offsetY,
    };
    dispatch(drawDots(dot));
    setPosition({ x: offsetX, y: offsetY });
  };
  const stopPainting = () => {
    setPainting(false);
  };
  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseMove={draw}
        onMouseLeave={stopPainting}
      ></canvas>
    </div>
  );
}
