import axios from 'axios';

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