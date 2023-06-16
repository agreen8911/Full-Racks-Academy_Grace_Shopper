import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
    "singleUser", async(userId) => {
        try{
            const {data} = await axios.get(`/api/adminview/${userId}`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

export const editUser = createAsyncThunk(
    "editUser",
    async ( { id, username, userType, firstName, lastName, email } ) => {
        const { data } = await axios.put(`/api/adminview/${id}`, {
            username,
            userType,
            firstName, 
            lastName, 
            email
        });
        return data
    }
);

const singleUserSlice = createSlice({
    name: "singleUser",
    initialState: {
        singleUser: {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
            state.singleUser = action.payload
        }),
        builder.addCase(editUser.fulfilled, (state, action) => {
            console.log('action', action.payload)
            state.singleUser = action.payload;
        })
    }
})

export const selectUser = (state) => state.user;


export default singleUserSlice.reducer