import {createSlice} from "@reduxjs/toolkit";
import { LogoutUser, fetchUser, loginUser, registerUser } from "./AuthActions";
import { useGetUsersQuery, userApi } from "./AuthApi";


const userSlice =  createSlice({
    name:"User",
    initialState:{userDetails:{},auth:false,isLoading:false,error:false,token:localStorage.getItem("token") || null,allUsers:[]},
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
        })
        .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        })
         .addCase(LogoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        })
        .addCase(LogoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload;
        state.token = null;
        })
        .addCase(LogoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        })
        .addMatcher(userApi.endpoints.getUsers.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
        })
        .addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.allUsers = action.payload;
        })
        .addMatcher(userApi.endpoints.getUsers.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        })
    }
})

export{userSlice}