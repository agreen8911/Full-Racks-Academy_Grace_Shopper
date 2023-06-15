import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStrength = createAsyncThunk(
    "allStrength", async () => {
        try{
            const{data} = await axios.get("/api/strengthequipment")
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

const allStrengthSlice = createSlice({
    name: "allStrength",
    initialState: {
        strengthList: []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllStrength.fulfilled, (state, action)=> {
            state.strengthList = action.payload
        }),
        builder.addCase(fetchAllStrength.rejected, (state, action)=> {
            console.log("Rejected")
        })
    }
})

export default allStrengthSlice.reducer