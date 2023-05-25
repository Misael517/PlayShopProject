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
    itemAmount: number
}

interface initialState {
    itemArr: Game[];
    gameStorage: Game[];
}


// initialState:
const initialState: initialState = {
    itemArr: [],
    gameStorage: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Game>) => {
            const localStor = localStorage.getItem('gamesCart');

            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            const gameInCart = state.gameStorage.find((game) => game.id === action.payload.id)

            if (gameInCart) {
                gameInCart.itemAmount++
                gameInCart.actualPrice = gameInCart.actualPrice * gameInCart.itemAmount
                gameInCart.price = gameInCart.price * gameInCart.itemAmount
            } else {
                state.gameStorage = [action.payload, ...state.gameStorage]
            }

            state.itemArr = [...state.gameStorage]

            localStorage.setItem('gamesCart', JSON.stringify(state.itemArr));
        },
        removeItem: (state, action: PayloadAction<Game>) => {
            const currentCart = localStorage.getItem('gamesCart');

            if (currentCart) {
                state.gameStorage = JSON.parse(currentCart);
            }

            state.itemArr = state.itemArr.filter((cartItem) => cartItem.id !== action.payload.id);
            state.gameStorage = state.gameStorage.filter((cartItem) => cartItem.id !== action.payload.id);
            localStorage.setItem('gamesCart', JSON.stringify(state.gameStorage));
        },
        increaseAmount: (state, action: PayloadAction<Game>) => {
            const localStor = localStorage.getItem('gamesCart');


            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            const gameInCart = state.gameStorage.find((game) => game.id === action.payload.id)



            if (gameInCart) {
                gameInCart.itemAmount++

                gameInCart.actualPrice = gameInCart.actualPrice * gameInCart.itemAmount
                gameInCart.price = gameInCart.price + action.payload.price
            }

            state.itemArr = [...state.gameStorage]
            localStorage.setItem('gamesCart', JSON.stringify(state.itemArr));
        },
        decreaseAmount: (state, action) => {
            const localStor = localStorage.getItem('gamesCart');

            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            const gameInCart = state.gameStorage.find((game) => game.id === action.payload)

            if (gameInCart) {
                gameInCart.itemAmount
                gameInCart.actualPrice = gameInCart.actualPrice - gameInCart.itemAmount
                gameInCart.price = gameInCart.price - gameInCart.itemAmount
            }

            state.itemArr = [...state.gameStorage]
            localStorage.setItem('gamesCart', JSON.stringify(state.itemArr));
        },
    }
});


export const { addItem, removeItem, increaseAmount, decreaseAmount } = cartSlice.actions
export default cartSlice.reducer
