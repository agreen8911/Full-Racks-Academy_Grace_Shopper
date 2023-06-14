import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecovery = createAsyncThunk(
    "allRecovery", async () => {
        try{
            const{data} = await axios.get("/api/recoveryequipment")
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

const allRecoverySlice = createSlice({
    name: "allRecovery",
    initialState: {
        recoveryList: []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllRecovery.fulfilled, (state, action)=> {
            state.recoveryList = action.payload
        }),
        builder.addCase(fetchAllRecovery.rejected, (state, action)=> {
            console.log("Rejected")
        })
    }
})

export default allRecoverySlice.reducer