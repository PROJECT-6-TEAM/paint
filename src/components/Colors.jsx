import React from "react";
import styles from "styles/colors.module.css";
import { useDispatch } from "react-redux";
import { currentColor } from "redux_toolkit/drawingSlice";

export default function Colors() {
  const dispatch = useDispatch();

  const handleColor = (color) => {
    dispatch(currentColor(color));
  };

  return (
    <>
      <div className={styles.color_box}>
        <button
          onClick={() => handleColor("black")}
          className={`${styles.color} ${styles.black}`}
        />
        <button
          onClick={() => handleColor("gray")}
          className={`${styles.color} ${styles.gray}`}
        />
        <button
          onClick={() => handleColor("brown")}
          className={`${styles.color} ${styles.brown}`}
        />
        <button
          onClick={() => handleColor("red")}
          className={`${styles.color} ${styles.red}`}
        />
        <button
          onClick={() => handleColor("yellow")}
          className={`${styles.color} ${styles.yellow}`}
        />
        <button
          onClick={() => handleColor("orange")}
          className={`${styles.color} ${styles.orange}`}
        />
        <button
          onClick={() => handleColor("green")}
          className={`${styles.color} ${styles.green}`}
        />
        <button
          onClick={() => handleColor("blue")}
          className={`${styles.color} ${styles.blue}`}
        />
        <button
          onClick={() => handleColor("purple")}
          className={`${styles.color} ${styles.purple}`}
        />
        <button
          onClick={() => handleColor("white")}
          className={`${styles.color} ${styles.white}`}
        />
      </div>
    </>
  );
}
