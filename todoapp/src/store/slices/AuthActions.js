import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserApi, loginUserApi, registerUserApi } from './AuthApi';
import Cookies from 'js-cookie';

export const registerUser = createAsyncThunk(
'user/register',
async ({data,navigate},{ rejectWithValue }) => {
try {
const response = await registerUserApi({email: "eve.holt@reqres.in",password: "pistol"});
Cookies.set('token',response.data.token, { expires: 1/24 });

setTimeout(()=>{
 navigate("/login")
},1000*60*60)

navigate("/")
return {data,res:response.data};
} catch (error) {
console.log(error)
return rejectWithValue(error.response.data);
}
}
);

export const loginUser = createAsyncThunk(
'user/login',
async ({data,navigate}, { rejectWithValue }) => {
try {
const response = await loginUserApi({email: "eve.holt@reqres.in",password: "cityslicka"});
Cookies.set('token',response.data.token, { expires: 1/24 });

setTimeout(()=>{
 navigate("/login")
},1000*60*60)

navigate("/")
return {data,res:response.data};
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

export const LogoutUser = createAsyncThunk(
'user/logout',
async (navigate,{ rejectWithValue }) => {
try {
Cookies.remove("token")
navigate("/login")
return {};
} catch (error) {
console.log(error)
return rejectWithValue(error.response.data);
}
}
);

export const fetchUser = createAsyncThunk(
'user/fetchAllUser',
async (data={}, { rejectWithValue }) => {
try {
const response = await fetchUserApi();
return response.data.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);
