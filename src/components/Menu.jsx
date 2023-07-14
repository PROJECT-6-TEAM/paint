import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { drawingMode } from "redux_toolkit/drawingSlice";
import Colors from "./Colors";

export default function Menu() {
  const dispatch = useDispatch();
  const [isDot, setIsDot] = useState(true);
  const [isLine, setIsLine] = useState(false);
  const btnCommonStyle = "w-12 h-12 rounded cursor-point border  border-solid";

  const handleDotBtn = () => {
    dispatch(drawingMode("dot"));
    setIsDot(true);
    setIsLine(false);
  };
  const handleLineBtn = () => {
    dispatch(drawingMode("line"));
    setIsDot(false);
    setIsLine(true);
  };

  return (
    <nav className="h-32 flex gap-10 items-center justify-center p-6 box-border border-b-8 border-solid border-gray-500">
      <button
        type="button"
        className={`${btnCommonStyle} ${
          isDot ? "border-4 border-black" : "border-gray-500"
        }`}
        onClick={handleDotBtn}
      >
        점
      </button>
      <button
        type="button"
        className={`${btnCommonStyle} ${
          isLine ? "border-4 border-black" : "border-gray-500"
        }`}
        onClick={handleLineBtn}
      >
        선
      </button>
      <Colors />
    </nav>
  );
}
