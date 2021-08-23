import { authReducer } from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const newStore = configureStore({
  reducer: {
    authReducer: authReducer,
  },
});

export default newStore;