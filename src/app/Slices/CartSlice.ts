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
    itemAmount: number;
    cartPrice: number;
}

interface initialState {
    itemArr: Game[];
    gameStorage: Game[];
    totalAmount: number;
}


// initialState:
const initialState: initialState = {
    itemArr: [],
    gameStorage: [],
    totalAmount: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        // Add items to the cart
        addItem: (state, action: PayloadAction<Game>) => {
            const localStor = localStorage.getItem('gamesCart');

            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            const gameInCart = state.gameStorage.find((game) => game.id === action.payload.id)

            if (gameInCart) {
                if (gameInCart.isOnSale) {
                    gameInCart.itemAmount++;
                    gameInCart.cartPrice += gameInCart.actualPrice;
                } else {
                    gameInCart.itemAmount++;
                    gameInCart.cartPrice += gameInCart.price;
                }
            } else {
                state.gameStorage = [action.payload, ...state.gameStorage]
            }

            state.itemArr = [...state.gameStorage]

            localStorage.setItem('gamesCart', JSON.stringify(state.itemArr));
        },


        // Remove the cart items
        removeItem: (state, action: PayloadAction<Game>) => {
            const currentCart = localStorage.getItem('gamesCart');

            if (currentCart) {
                state.gameStorage = JSON.parse(currentCart);
            }

            state.itemArr = state.itemArr.filter((cartItem) => cartItem.id !== action.payload.id);
            state.gameStorage = state.gameStorage.filter((cartItem) => cartItem.id !== action.payload.id);
            localStorage.setItem('gamesCart', JSON.stringify(state.gameStorage));
        },


        // Increase the amouth of items
        increaseAmount: (state, action: PayloadAction<Game>) => {
            const localStor = localStorage.getItem('gamesCart');


            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            const gameInCart = state.gameStorage.find((game) => game.id === action.payload.id)

            if (gameInCart) {
                if (gameInCart.isOnSale) {
                    gameInCart.itemAmount++;
                    gameInCart.cartPrice += gameInCart.actualPrice;
                } else {
                    gameInCart.itemAmount++;
                    gameInCart.cartPrice += gameInCart.price;
                }
            }


            state.itemArr = [...state.gameStorage]
            localStorage.setItem('gamesCart', JSON.stringify(state.itemArr));
        },


        // Decrease the amoutn of items
        decreaseAmount: (state, action) => {
            const localStor = localStorage.getItem('gamesCart');


            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            const gameInCart = state.gameStorage.find((game) => game.id === action.payload.id)

            if (gameInCart) {
                if (gameInCart.itemAmount > 1) {
                    if (gameInCart.isOnSale) {
                        gameInCart.itemAmount--;
                        gameInCart.cartPrice -= gameInCart.actualPrice;
                    } else {
                        gameInCart.itemAmount--;
                        gameInCart.cartPrice -= gameInCart.price;
                    }
                }
            }

            state.itemArr = [...state.gameStorage]
            localStorage.setItem('gamesCart', JSON.stringify(state.itemArr));
        },
        calculateAmount: (state) => {
            const localStor = localStorage.getItem('gamesCart');

            if (localStor) {
                state.gameStorage = JSON.parse(localStor);
            }

            state.totalAmount = state.gameStorage.reduce((total, game) => total + game.itemAmount, 0);
            localStorage.setItem('cartAmount', JSON.stringify(state.totalAmount))
        }
    }
});


export const { addItem, removeItem, increaseAmount, decreaseAmount, calculateAmount } = cartSlice.actions
export default cartSlice.reducer
