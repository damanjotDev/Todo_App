import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from './AuthApi';

export const registerUser = createAsyncThunk(
'user/register',
async (data,{ rejectWithValue }) => {
try {
const response = await registerUserApi({email: "eve.holt@reqres.in",password: "pistol"});
return {data,res:response.data};
} catch (error) {
    console.log(error)
return rejectWithValue(error.response.data);
}
}
);

export const loginUser = createAsyncThunk(
'user/login',
async (data, { rejectWithValue }) => {
try {
const response = await loginUserApi({email: "eve.holt@reqres.in",password: "cityslicka"});
return {data,res:response.data};
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);