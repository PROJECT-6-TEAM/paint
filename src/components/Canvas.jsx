import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDrawingDots } from "cumstomHook/useDrawingDots";
import { useDrawingLines } from "cumstomHook/useDrawingLines";

export default function Canvas() {
  const drawingMode = useSelector((state) => state.drawing.drawingMode);
  const canvasRef = useRef(null);
  const { DotMouseEvents, dotDraw } = useDrawingDots();
  const { LineMouseEvents, lineDraw } = useDrawingLines();

  const handleMouseEvents = (event) => {
    drawingMode === "dot" && DotMouseEvents(event);
    drawingMode === "line" && LineMouseEvents(event);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    dotDraw(context);
    lineDraw(context);
  }, [drawingMode, dotDraw, lineDraw]);

  return (
    <canvas
      ref={canvasRef}
      width="1200"
      height="800"
      onMouseDown={handleMouseEvents}
      onMouseUp={handleMouseEvents}
      onMouseMove={handleMouseEvents}
      className="cursor-crosshair"
    />
  );
}
