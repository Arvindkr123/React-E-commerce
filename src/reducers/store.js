import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice.js";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
  },
});
export default store;
