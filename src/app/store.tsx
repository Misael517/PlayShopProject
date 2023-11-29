import { configureStore } from "@reduxjs/toolkit";
import GamesPagesReducer from "./Slices/GamesPageSlice";
import CartReducer from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    gamesPages: GamesPagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
