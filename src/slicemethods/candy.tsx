import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { intialStateProps } from "../types";

const initialState: intialStateProps = {
  board: [],
  boardSize: 8,
};
const candyCrushSlice = createSlice({
  name: "candyCrush",
  initialState,
  reducers: {
    updateBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload;
    },
  },
});
export const { updateBoard } = candyCrushSlice.actions;
export default candyCrushSlice.reducer;
