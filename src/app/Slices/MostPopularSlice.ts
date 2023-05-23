import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CurrentGamesState {
    value: number;
}

const initialState: CurrentGamesState = {
    value: 0,
}

export const mostPopularSlice = createSlice({
    name: 'mostPopularSwitch',
    initialState,
    reducers: {
        handleNext: (state) => {
            if (state.value < 1) {
                state.value += 1
            }
        },
        handleBack: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }

        },
        switchGames: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { handleNext, handleBack, switchGames } = mostPopularSlice.actions
export default mostPopularSlice.reducer