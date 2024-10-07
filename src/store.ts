import { configureStore } from "@reduxjs/toolkit";
import { api } from "./components/apiSlice";

// Define the store type explicitly using TypeScript
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Define RootState and AppDispatch types inferred from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
