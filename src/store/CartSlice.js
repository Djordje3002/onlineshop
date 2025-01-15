import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 1,
        totalPrice: 0, // We'll also store the total price of all products in the cart
    },
    reducers: {
        SaveInCartAction: (state, action) => { 
            console.log("Action Payload:", action.payload);
            let copyCart = [...state.cart];
            const findIndex = copyCart.findIndex(item => item.id === action.payload.id);
        
            if (findIndex === -1) {
                // If the item is not already in the cart, add a new item
                copyCart.push({ ...action.payload, count: 1, cartTotal: action.payload.price });
            } else {
                // If the item is already in the cart, increment the count and add the price to the cartTotal
                copyCart[findIndex].count += 1;
                copyCart[findIndex].cartTotal += action.payload.price;
            }
        
            state.cart = copyCart;
        
            // Log state after the update
            console.log("Updated Cart:", state.cart);
            state.totalProduct = state.cart.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.cartTotal, 0);
        },
/******  cfcefac5-75a8-4dc9-b623-725e44cf627d  *******/

        // Action to remove an item from the cart
        removeItemFromCart: (state, action) => {
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            state.cart = updatedCart;

            // Recalculate the total number of products and total price
            state.totalProduct = state.cart.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.cartTotal, 0);
        },

        // Action to decrease item quantity in the cart
        decreaseItemQuantity: (state, action) => {
            const { id, price } = action.payload;
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex(item => item.id === id);

            if (index !== -1 && updatedCart[index].count > 1) {
                updatedCart[index].count -= 1;
                updatedCart[index].cartTotal -= price;
            }

            state.cart = updatedCart;

            // Recalculate the total number of products and total price
            state.totalProduct = state.cart.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.cartTotal, 0);
        }
    }
});

export const { SaveInCartAction, removeItemFromCart, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
