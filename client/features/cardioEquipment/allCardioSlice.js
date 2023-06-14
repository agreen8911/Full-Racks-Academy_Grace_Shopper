import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCardio = createAsyncThunk(
    "allCardio", async () => {
        try{
            const{data} = await axios.get("/api/cardioequipment")
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

const allCardioSlice = createSlice({
    name: "allCardio",
    initialState: {
        cardioList: []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllCardio.fulfilled, (state, action)=> {
            state.cardioList = action.payload
        }),
        builder.addCase(fetchAllCardio.rejected, (state, action)=> {
            console.log("Rejected")
        })
    }
})

export default allCardioSlice.reducer