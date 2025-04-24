import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/slices/searchSlice.js";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
