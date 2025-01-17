import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
    },
    reducers: {
        SaveInCartAction: (state, action) => {
            let copyCart = [...state.cart];
            const findIndex = copyCart.findIndex(item => item.id === action.payload.id);

            if (findIndex === -1) {
                copyCart.push({ ...action.payload, count: 1, cartTotal: action.payload.price });
            } else {
                copyCart[findIndex].count += 1;
                copyCart[findIndex].cartTotal += action.payload.price;
            }

            state.cart = copyCart;
            state.totalProduct = state.cart.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.cartTotal, 0);
        },

        removeItemFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.totalProduct = state.cart.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.cartTotal, 0);
        },

        decreaseItemQuantity: (state, action) => {
            const { id, price } = action.payload;
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex(item => item.id === id);

            if (index !== -1 && updatedCart[index].count > 1) {
                updatedCart[index].count -= 1;
                updatedCart[index].cartTotal -= price;
            }

            state.cart = updatedCart;
            state.totalProduct = state.cart.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.cartTotal, 0);
        },

        // New reducer to clear the cart
        clearCart: (state) => {
            state.cart = [];
            state.totalProduct = 0;
            state.totalPrice = 0;
        }
    }
});

export const { SaveInCartAction, removeItemFromCart, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
