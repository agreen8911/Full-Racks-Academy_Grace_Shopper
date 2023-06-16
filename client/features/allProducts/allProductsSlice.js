import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//const initialState = [];

export const fetchAllProductsAsync = createAsyncThunk(
    "allProducts/fetchAllProductsAsync",
    async () => {
        try {
            const { data } = await axios.get('/api/allProducts')
            return data
        } catch (error) {
            console.log(error);
        }
    }
)


const allProductsSlice = createSlice({
    name: "allProducts",
    initialState: {
        productList: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
            state.productList = action.payload
        })
    },  
})

export const selectAllProducts = (state) => {
    return state.allProducts
}



export default allProductsSlice.reducer
