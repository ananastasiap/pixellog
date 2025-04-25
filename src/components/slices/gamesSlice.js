import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: [],
  reducers: {
    addGame: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addGame } = gameSlice.actions;
export default gameSlice.reducer;
