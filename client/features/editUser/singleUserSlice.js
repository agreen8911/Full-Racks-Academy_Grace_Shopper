import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = 'token';


export const fetchSingleUser = createAsyncThunk(
    "singleUser", async(userId) => {
        const token = window.localStorage.getItem(TOKEN);
        try{
            const {data} = await axios.get(`/api/adminview/${userId}`, {
                headers: {
                    authorization: token
                },
            })
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

export const editUser = createAsyncThunk(
    "editUser", 
    async ({ id, username, firstName, lastName, email }) => {
      const token = window.localStorage.getItem(TOKEN);
      const response = await axios.put(`/api/adminview/${id}`, {
        username,
        firstName,
        lastName,
        email
      }, {
        headers: {
          authorization: token
        }
      });
      return response.data;
    }
)

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
            state.singleUser = action.payload;
        })
    }
})

export const selectUser = (state) => state.user;


export default singleUserSlice.reducer