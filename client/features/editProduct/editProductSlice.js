import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
    "singleProduct", async(productId) => {
        try{
            const {data} = await axios.get(`/api/adminviewproduct/${productId}`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

export const editProduct = createAsyncThunk(
    "editProduct",
    async ( { id, productName, price, description, imageURL, productType } ) => {
        const { data } = await axios.put(`/api/adminviewproduct/${id}`, {
            productName,
            price,
            description,
            imageURL, 
            productType,
        });
        return data
    }
);

export const deleteProduct = createAsyncThunk(
    "deleteProduct", async (productId) => {
        try{
            const {data} = await axios.delete(`/api/adminviewproduct/${productId}`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

const editProductSlice = createSlice({
    name: "editProduct",
    initialState: {
        editProduct: {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.editProduct = action.payload
        }),
        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.editProduct = action.payload;
        }),
        builder.addCase(deleteProduct.fulfilled, (state, action)=> {
            const currentProducts = state.editProduct
            const productId = action.payload.id
            console.log('this is current products', currentProducts)
            const newList = currentProducts.filter((product) => {
                return product.id !== productId
            })
            state.editProduct = [...newList]
        })
    }
})

export const selectProduct = (state) => state.product;


export default editProductSlice.reducer