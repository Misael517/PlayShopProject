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
    cartItems: Item[]
}


// initialState:
const initialState: initialState = {
    itemArr: [],
    cartItems: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Game>) => {
            const currentCart = localStorage.getItem('myCart');

            if (currentCart) {
                state.cartItems = JSON.parse(currentCart);
            }


            state.itemArr = [
                {
                    id: crypto.randomUUID(),
                    game: action.payload
                },

                ...state.cartItems
            ];

            localStorage.setItem('myCart', JSON.stringify(state.itemArr));
        },
        removeItem: (state, action: PayloadAction<Item>) => {
            const currentCart = localStorage.getItem('myCart');

            if (currentCart) {
                state.cartItems = JSON.parse(currentCart);
            }

            state.itemArr = state.itemArr.filter((cartItem) => cartItem.id !== action.payload.id);
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            localStorage.setItem('myCart', JSON.stringify(state.cartItems));
        },
    }
});


export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
