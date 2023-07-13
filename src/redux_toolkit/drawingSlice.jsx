import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dots: [],
  lines: [],
  currentColor: "black",
};

const drawingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
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

export const { drawDots, drawLines, currentColor } = drawingSlice.actions;
export default drawingSlice.reducer;
