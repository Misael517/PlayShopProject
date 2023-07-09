import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialState {
    contentID: number
}

const initialState: initialState = {
    contentID: 0
}



export const GamesPageSlice = createSlice({
    name: 'GamePages',
    initialState,
    reducers: {
        setContentID: (state, action: PayloadAction<number>) => {

            // remove 1 from the id to be equal to the index
            const getID = action.payload - 1

            state.contentID = getID

            const currentID = String(state.contentID)

            sessionStorage.setItem('currentContent', currentID)

        }
    }
})


export const { setContentID } = GamesPageSlice.actions
export default GamesPageSlice.reducer