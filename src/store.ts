import { createSlice } from "@reduxjs/toolkit";
import { intialStateProps } from "./types";

const initialState: intialStateProps = {
  board: [],
  boardSize: 8,
};
const candyCrushSlice = createSlice({
  name: "candyCrush",
  initialState,
  reducers: {},
});
