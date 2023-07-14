import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawingMode: "dot",
  dots: [],
  lines: [],
  currentColor: "black",
};

const drawingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
    drawingMode: (state, action) => {
      state.drawingMode = action.payload;
    },
    drawDots: (state, action) => {
      state.dots = [...state.dots, action.payload];
    },
    drawLines: (state, action) => {
      state.lines = [...state.lines, action.payload];
    },
    currentColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { drawingMode, drawDots, drawLines, currentColor } =
  drawingSlice.actions;
export default drawingSlice.reducer;
