import {createSlice} from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./AuthActions";


const userSlice =  createSlice({
    name:"User",
    initialState:{userDetails:{},auth:false,isLoading:false,error:false,token:localStorage.getItem("token") || null},
    reducers:{},
    extraReducers:(builder)=>{
     builder
     .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload.data;
        state.token = action.payload.res.token;
        localStorage.setItem("token",action.payload.res.token)
        })
        .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        })
        .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload.data;
        state.token = action.payload.res.token;
        localStorage.setItem("token",action.payload.res.token)
        })
        .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        })
    }
})

export{userSlice}