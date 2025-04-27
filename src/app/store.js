import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/slices/searchSlice";
import gamesReducer from "../components/slices/gamesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["games"],
  blacklist: ["search"],
};

const rootReducer = combineReducers({
  search: searchReducer,
  games: gamesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
