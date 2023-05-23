import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// interfaces:
interface Game {
    id: number,
    name: string;
    icon: string;
    Platforms: string,
    Publisher: string,
    Genre: string,
    link?: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
}

interface Item {
    id: string;
    game: Game;
}

interface initialState {
    itemArr: Item[]
}


// initialState:
const initialState: initialState = {
    itemArr: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Game>) => {
            state.itemArr = [
                {
                    id: crypto.randomUUID(), 
                    game: action.payload
                }, 
                
                ...state.itemArr
            ];
        },
        removeItem: (state, action: PayloadAction<Item>) => {
            state.itemArr = state.itemArr.filter((cartItem) => cartItem.id !== action.payload.id);
        },
    },
});


export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
