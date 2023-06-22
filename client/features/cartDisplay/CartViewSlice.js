import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [];

export const fetchAllCartView = createAsyncThunk(
    "cartDisplay/fetchAllCartView", async (userId) => {
        console.log('THIS IS THUNK');
        try{
            const { data } = await axios.get( `/api/cartdisplay/${userId}`)
            console.log('this is data2', data)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

// export const updateCart = createAsyncThunk(
//     "updateCart",
//     async ({ userId }) => {
//         console.log('THIS IS updateCartThunk');
//         console.log('userId inside thunk', userId)
//         try {
//             const response = await axios.put(`/api/cartdisplay/${userId}`, {
//                 // status: "fulfilled" // Update the "status" value to "fulfilled"
//             });
//             console.log('this is response!', response);
//             return response.data;
//         } catch (err) {
//             console.log(err);
//         }
//     }
// );



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
        // builder.addCase(updateCart.fulfilled, (state, action) => {
        //     console.log("THIS IS action.payload update", action.payload);
        //     state.cartList = action.payload;
        // })
    }
} )

export const selectCart = ( state ) =>  {
    return state.cartList;
}

export default allCartviewSlice.reducer;