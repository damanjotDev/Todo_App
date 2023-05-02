import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://reqres.in';

//-----------------------------------------------------------------------Auth Apis
export const registerUserApi = async (data) => {
const response = await axios.post(`${BASE_URL}/api/register`, data);
return response;
};

export const loginUserApi = async (data) => {
const response = await axios.post(`${BASE_URL}/api/login`, data);
return response;
};

//------------------------------------------------------------------------Users Apis
export const fetchUserApi = async () => {
const response = await axios.get(`${BASE_URL}/api/unknown`);
return response;
};