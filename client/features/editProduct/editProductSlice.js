// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const TOKEN = 'token';


// export const fetchSingleProduct = createAsyncThunk(
//     "singleProduct", async(productId) => {
//         const token = window.localStorage.getItem(TOKEN);

//         try{
//             const {data} = await axios.get(`/api/adminviewproduct/${productId}`, {
//                 headers: {
//                     authorization: token
//                 },
//             })
//             return data
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )

// export const editProduct = createAsyncThunk(
//     "editProduct",
//     async ( { id, productName, price, description, imageURL, productType } ) => {
//         const token = window.localStorage.getItem(TOKEN);

//         const response = await axios.put(`/api/adminviewproduct/${id}`, {
//             productName,
//             price,
//             description,
//             imageURL, 
//             productType,
//         }, {
//             headers: {
//               authorization: token
//             }
//         });
//         return response.data
//     }
// );

// export const deleteProduct = createAsyncThunk(
//     "deleteProduct", async (productId) => {
//         const token = window.localStorage.getItem(TOKEN);

//         try{
//             const {data} = await axios.delete(`/api/adminviewproduct/${productId}`, {
//                 headers: {
//                     authorization: token
//                 }
//             })
//             return data
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )

// const editProductSlice = createSlice({
//     name: "editProduct",
//     initialState: {
//         editProduct: {}
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
//             state.editProduct = action.payload
//         }),
//         builder.addCase(editProduct.fulfilled, (state, action) => {
//             state.editProduct = action.payload;
//         }),
//         builder.addCase(deleteProduct.fulfilled, (state, action)=> {
//             const currentProducts = state.editProduct
//             const productId = action.payload.id
//             const newList = currentProducts.filter((product) => {
//                 return product.id !== productId
//             })
//             state.editProduct = [...newList]
//         })
//     }
// })

// export const selectProduct = (state) => state.editProduct;


// export default editProductSlice.reducer