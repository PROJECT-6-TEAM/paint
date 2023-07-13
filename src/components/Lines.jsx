import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawLines } from "../redux_toolkit/drawingSlice";

export default function Lines() {
  const dispatch = useDispatch();
  const lines = useSelector((state) => state.drawing.lines);
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const [drawing, setDrawing] = useState(false);
  const [linesDrawn, setLinesDrawn] = useState([]);
  const canvasRef = useRef(null);

  const handleMouseEvents = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const point = {
      x: offsetX,
      y: offsetY,
    };

    if (event.type === "mousedown") {
      setDrawing(true);
      setLinesDrawn([
        {
          start: point,
          end: point,
          color: currentColor,
        },
      ]);
    } else if (event.type === "mouseup" && drawing) {
      setDrawing(false);
      dispatch(drawLines(...linesDrawn));
      setLinesDrawn([]);
    } else if (event.type === "mousemove" && drawing) {
      setLinesDrawn((prevLines) => {
        const updatedLines = [...prevLines];
        updatedLines[0] = { ...updatedLines[0], end: point };
        return updatedLines;
      });
    }
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const drawLine = (line) => {
      context.beginPath();
      context.moveTo(line.start.x, line.start.y);
      context.lineTo(line.end.x, line.end.y);
      context.strokeStyle = line.color;
      context.lineWidth = 2;
      context.stroke();
    };
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    lines.forEach((line) => drawLine(line));
    linesDrawn.forEach((line) => drawLine(line));
  }, [lines, linesDrawn]);

  return (
    <canvas
      ref={canvasRef}
      width="500"
      height="500"
      onMouseDown={handleMouseEvents}
      onMouseUp={handleMouseEvents}
      onMouseMove={handleMouseEvents}
      className="cursor-crosshair border border-solid border-black"
    />
  );
}
