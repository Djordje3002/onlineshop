import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:  'product',
    initialState: {
        allProduct: [],
        isLoading: false,
        selectCategory: '',
        searchProduct: ''
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
        console.log(action.payload)
        state.allProduct = action.payload;
        state.isLoading = true
    },
    saveSelectCategoryAction: (state, action) => {
        state.selectCategory = action.payload;
    },
    saveSearchProductAction: (state,action) => {
        state.searchProduct = action.payload;
    }
    }
})

export const { saveAllProductsAction, saveSelectCategoryAction, saveSearchProductAction } = ProductSlice.actions;

export default ProductSlice.reducer;