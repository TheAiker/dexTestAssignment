import { authReducer } from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

export const newStore = configureStore({
  reducer: {
    authReducer: authReducer,
  },
});

export default newStore;