import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/slices/searchSlice";
import gamesReducer from "../components/slices/gamesSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    games: gamesReducer,
  },
});
