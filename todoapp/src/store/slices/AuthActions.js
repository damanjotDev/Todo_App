import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from './AuthApi';

export const registerUser = createAsyncThunk(
'user/register',
async (data, { rejectWithValue }) => {
try {
const response = await registerUserApi(data);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

export const loginUser = createAsyncThunk(
'user/login',
async (data, { rejectWithValue }) => {
try {
const response = await loginUserApi(data);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);