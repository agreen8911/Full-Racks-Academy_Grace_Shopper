import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = 'token';


export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const response = await axios.get(`/api/singleproduct/${id}`, {
          headers: {
              authorization: token
          },
      })
      return response.data;
    } catch (err) {
      throw err; // Throw the error to handle it in the rejected state
    }
  }
);


export const editProduct = createAsyncThunk(
    "editProduct",
    async ( { id, productName, price, description, imageURL, productType } ) => {
        const token = window.localStorage.getItem(TOKEN);

        try {
        const response = await axios.put(`/api/adminviewproduct/${id}`, {
            productName,
            price,
            description,
            imageURL, 
            productType,
        }, {
            headers: {
              authorization: token
            }
        });
        return response.data
      } catch (err) {
        console.error(err)
      }
    }
);

export const deleteProduct = createAsyncThunk(
    "deleteProduct", async (productId) => {
        const token = window.localStorage.getItem(TOKEN);

        try{
            const {data} = await axios.delete(`/api/adminviewproduct/${productId}`, {
                headers: {
                    authorization: token
                }
            })
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

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
    builder.addCase(editProduct.fulfilled, (state, action) => {
      return action.payload;
    }),
    builder.addCase(deleteProduct.fulfilled, (state, action)=> {
      const newState = state.filter((product) => product.id !== action.payload);
      return newState;
  })
  },
});

export const selectSingleProduct = (state) => {
  console.log("this is all state", state)
  return state.singleProduct;
};



export default singleProductSlice.reducer;
