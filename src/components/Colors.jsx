import React from "react";
import { useDispatch } from "react-redux";
import { currentColor } from "redux_toolkit/drawingSlice";

export default function Colors() {
  const dispatch = useDispatch();

  const btnCommonStyle =
    "w-6 h-6 border border-solid border-black focus:border-2";

  const handleColor = (color) => {
    dispatch(currentColor(color));
  };

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-2 gap-2.5">
        <button
          onClick={() => handleColor("black")}
          className={`bg-black ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("gray")}
          className={`bg-gray-400 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("brown")}
          className={`bg-orange-900 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("red")}
          className={`bg-red-600 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("yellow")}
          className={`bg-yellow-300 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("orange")}
          className={`bg-orange-500 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("green")}
          className={`bg-green-600 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("blue")}
          className={`bg-blue-700 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("purple")}
          className={`bg-purple-600 ${btnCommonStyle}`}
        />
        <button
          onClick={() => handleColor("white")}
          className={`bg-white ${btnCommonStyle}`}
        />
      </div>
    </>
  );
}
