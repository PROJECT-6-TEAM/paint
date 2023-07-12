import { configureStore } from "@reduxjs/toolkit";
import drawingReducer from "./drawingSlice";


const store = configureStore({
  reducer: {
    drawing: drawingReducer,
  },
});

export default store;