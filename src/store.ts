import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./components/acounts/accountSlice";
import customerSlice from "./components/customer/customerSlice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerSlice,
  },
});
