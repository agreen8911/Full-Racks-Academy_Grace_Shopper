import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   singleProduct: {}
// };



export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async ( id ) => {
    try {
      console.log("ID", id);
      const response = await axios.get(`/api/singleproduct/${id}`);
      console.log("RESPONSE DATA",response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err; // Throw the error to handle it in the rejected state
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct:{}
  },
  extraReducers: (builder) => {
    builder.addCase( fetchSingleProduct.fulfilled, ( state, action ) => {
      state.singleProduct = action.payload;
      console.log("PAYLOAD", action.payload);
    });

    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;
