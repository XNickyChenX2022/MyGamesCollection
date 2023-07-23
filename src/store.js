import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/Users/authSlice";
// import gameReducer from "./slices/Games/gamesSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // game: gameReducer,
    // search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
