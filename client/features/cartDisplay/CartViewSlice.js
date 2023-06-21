import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [];




export const fetchAllCartView = createAsyncThunk(
    "cartDisplay/fetchAllCartView", async (userId) => {
        console.log('THIS IS THUNK');
        try{
            const { data } = await axios.get( `/api/cartdisplay/${userId}`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

// export const fetchAllCartView = createAsyncThunk(
//     "cartDisplay/fetchAllCartView", async (cartId) => {
//         try{
//             const { data } = await axios.get( `/api/cartdisplay/${cartId}`)
//             console.log("THIS IS DATA", data);
//             return data
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )

const allCartviewSlice = createSlice({
    name: "cartDisplay",
    initialState: {
        cartList:[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( fetchAllCartView.fulfilled, ( state, action ) => {
            console.log("THIS IS action.payload", action.payload);
            state.cartList = action.payload;
            // return action.payload;   
        }),
        builder.addCase(fetchAllCartView.rejected, (state, action)=> {
            console.log("Rejected")
        })
    }
} )

export const selectCart = ( state ) =>  {
    return state.cartDisplay.cartList;
}

export default allCartviewSlice.reducer;