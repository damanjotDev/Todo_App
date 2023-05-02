import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://reqres.in';

export const registerUserApi = async (data) => {
const response = await axios.post(`${BASE_URL}/api/register`, data);
return response;
};

export const loginUserApi = async (data) => {
const response = await axios.post(`${BASE_URL}/api/login`, data);
return response;
};

export const fetchUserApi = async () => {
const response = await axios.get(`${BASE_URL}/api/unknown`);
return response;
};

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => 'api/unknown',
      })
    }),
  });

  export const {useGetUsersQuery} = userApi;

