import { configureStore } from "@reduxjs/toolkit";
import candy from "./slicemethods/candy";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    candyCrush: candy,
  },
});
