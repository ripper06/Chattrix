//https://chattrix-backend-alpha.vercel.app

import axios from 'axios';

const BASE_URL = import.meta.env.MODE === 'development' ? "http://localhost:4060/api" : "https://chattrix-backend-alpha.vercel.app/api"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials : true

});