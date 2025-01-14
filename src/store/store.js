import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";


const store = configureStore({
    reducer: {
        categoryStore: CategorySlice,
        productStore: ProductSlice,
        cartStore: CartSlice
    }
})

export default store;