import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (id) => {
    try {
      const response = await axios.get(`/api/singleproduct/${id}`);
      return response.data;
    } catch (err) {
      throw err; // Throw the error to handle it in the rejected state
    }
  }
);

export const fetchCart = createAsyncThunk(
  'singleCart', async (userId) => {
    try {
      const response = await axios.get(`/api/cart/${userId}`);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

export const addToCartProducts = createAsyncThunk(
  'addCartProduct', async (product) => {
    try {
      const { data } = axios.post('/api/cartproducts', product)
      return data
    } catch (error) {
      console.log(error)
    }

  }
)

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {},
   reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export const selectSingleProduct = (state) => {
  console.log("this is all state", state)
  return state.singleProduct;
};



export default singleProductSlice.reducer;
