import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  student: {},
  campus: [],
};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (id) => {
    try {
      const response = await axios.get(`/api/singleproduct/${id}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err; // Throw the error to handle it in the rejected state
    }
  }
);

export const updateSingleProduct = createAsyncThunk(
  "singleProduct/updateSingleProduct",
  async ({ id, productName, price, description }) => {
    try {
      const response = await axios.put(`/api/students/${id}`, {
        productName,
        description,
        price,
      });
      console.log("After axios put");
      return response.data; // Return the data from the response
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.student = { ...state.student, ...action.payload };
    });
    builder.addCase(updateSingleProduct.fulfilled, (state, action) => {
      // Merge the updated student data with the existing state
      return {
        ...state,
        ...action.payload.updateSingleProduct,
      };
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct.student;
};

export default singleProductSlice.reducer;
