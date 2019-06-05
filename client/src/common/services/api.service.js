import axios from 'axios';
import { isUserConnected, getToken } from './auth.service';

const api = axios.create({
    baseURL: 'https://api.example.com'
});

api.interceptors.request.use(
    config => {
        if (!isUserConnected()) {
            config.headers.authorization = `Bearer ${getToken()}`;
        }

        return config;
    },
    () => Promise.reject(error)
);

export default api;