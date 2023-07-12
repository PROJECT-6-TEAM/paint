import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lines } from '../redux_toolkit/drawingSlice';

const drawLine = (context, line) => {
  context.beginPath();
  context.moveTo(line.start.x, line.start.y);
  context.lineTo(line.end.x, line.end.y);
  context.strokeStyle = line.color;
  context.stroke();
}

const DrawingBoard = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const [drawing, setDrawing] = useState(false);
  const [linesDrawn, setLinesDrawn] = useState([]);
  const canvasRef = useRef();

  const handleMouseEvents = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };

    if (event.type === 'mousedown') {
      setDrawing(true);
      setLinesDrawn([...linesDrawn, { start: point, end: point, color: currentColor }]);
    } else if (event.type === 'mouseup' && drawing) {
      setDrawing(false);
      dispatch(lines(linesDrawn[linesDrawn.length - 1]));
    } else if (event.type === 'mousemove' && drawing) {
      setLinesDrawn(linesDrawn.slice(0, -1).concat({ ...linesDrawn[linesDrawn.length - 1], end: point }));
    }
  };

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    linesDrawn.forEach(line => drawLine(context, line));
  }, [linesDrawn]);

  return (
    <canvas
      ref={canvasRef}
      width="500"
      height="500"
      onMouseDown={handleMouseEvents}
      onMouseUp={handleMouseEvents}
      onMouseMove={handleMouseEvents}
      style={{ cursor: 'crosshair', border: '1px solid black' }}
    />
  );
};

export default DrawingBoard;