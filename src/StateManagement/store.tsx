import { configureStore } from "@reduxjs/toolkit";
import CurrentGamesReducer from "./Slices/OnSaleSlice";
import CoomingSoonReducer from "./Slices/CoomingSoonSlice";
import MostPopularReducer from "./Slices/MostPopularSlice";

export const store = configureStore({
    reducer: {
        switchGamesOnSale: CurrentGamesReducer,
        switchGamesCoomingSoon: CoomingSoonReducer,
        switchGamesMostPopular: MostPopularReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch