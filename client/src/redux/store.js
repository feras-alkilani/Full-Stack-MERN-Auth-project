import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Define your middleware here
      serializableCheck: false
    })
});
