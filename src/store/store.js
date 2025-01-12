import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import ProductSlice from "./ProductSlice";



const store = configureStore({
    reducer: {
        categoryStore: categorySlice,
        productStore: ProductSlice
    }
})

export default store;