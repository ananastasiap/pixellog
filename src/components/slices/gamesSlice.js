import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    addGame: (state, action) => {
      state.push(action.payload);
    },
    deleteGame: (state, action) => {
      return state.filter((game) => game.id !== action.payload);
    },
  },
});

export const { addGame, deleteGame } = gameSlice.actions;
export default gameSlice.reducer;
