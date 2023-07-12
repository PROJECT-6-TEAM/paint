import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dots: [],
  lines: [],
  currentColor: "",
};

const drawingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
    drawDots: (state, action) => {
      console.log(state);
      console.log(action);
      state.dots = [...state, action.dots];
    },
    lines: (state, action) => {
      console.log(state);
      console.log(action);
      state.lines = [...state, action.lines];
    },
    currentColor: (state, action) => {
      console.log(state);
      console.log(action);
      state.currentColor = action.payload;
    },
  },
});

export const { drawDots, lines, currentColor } = drawingSlice.actions;
export default drawingSlice.reducer;
