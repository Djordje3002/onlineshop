import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:  'product',
    initialState: {
        allProduct: [],
        isLoading: false
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
        console.log(action.payload)
        state.allProduct = action.payload;
        state.isLoading = true
    }
    }
})

export const { saveAllProductsAction } = ProductSlice.actions;

export default ProductSlice.reducer;