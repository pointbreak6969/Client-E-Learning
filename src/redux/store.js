import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice.js";
import authReducer from "./authSlice.js";
export const store = configureStore({
  reducer: { search: searchReducer, auth: authReducer },
});
