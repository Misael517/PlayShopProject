import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    itemArr: Item[];
    storedCartItems: Item[]
}


// initialState:
const initialState: initialState = {
    itemArr: [],
    storedCartItems: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Game>) => {
            const existingCartItems = localStorage.getItem('myCart');

            if (existingCartItems) {
                state.storedCartItems = JSON.parse(existingCartItems);
            }


            state.itemArr = [
                {
                    id: crypto.randomUUID(),
                    game: action.payload
                },

                ...state.itemArr
            ];

            localStorage.setItem('myCart', JSON.stringify(state.itemArr));
        },
        removeItem: (state, action: PayloadAction<Item>) => {
            state.itemArr = state.itemArr.filter((cartItem) => cartItem.id !== action.payload.id);
        },
    }
});


export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
