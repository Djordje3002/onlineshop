import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./CategorySlice";
import productSlice from "./ProductSlice";
import cartSlice from "./CartSlice";


const store = configureStore({
    reducer: {
        categoryStore: categorySlice,
        productStore: productSlice,
        cartStore: cartSlice
    }
})

export default store; 