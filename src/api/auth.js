// import axios from 'axios';

// export const login = async (username, password) => {
//     try {
//         const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signin/`, {
//             username,
//             password
//         });
//         console.log("API Response:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("Login failed:", error);
//         throw error;
//     }
// };

// export const signup = async (username, email, password, password2) => {
//     try {
//         const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signup/`, {
//             username,
//             email,
//             password,
//             password2,
//         });
//         console.log("API Response:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("Signup failed:", error);
//         throw error;
//     }
// };

// // export const refreshToken = async () => {
// //     const refreshToken = localStorage.getItem("refresh");
// //     try {
// //         const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/token/refresh/`, {
// //             refresh: refreshToken,
// //         });
// //         localStorage.setItem("access", response.data.access);
// //         return response.data;
// //     }
// //     catch (error) {
// //         console.error("Token refresh failed:", error);
// //         throw error;
// //     }
// // };


// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("access");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

import api from './api.js';

export const login = async (username, password) => {
    try {
        const response = await api.post(`/api/v1/auth/signin/`, {
            username,
            password
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signup = async (username, email, password, password2) => {
    try {
        const response = await api.post(`/api/v1/auth/signup/`, {
            username,
            email,
            password,
            password2,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


// export const refreshToken = async () => {
//     const refreshToken = localStorage.getItem("refresh");
//     try {
//         const response = await api.post(`/api/v1/token/refresh/`, {
//             refresh: refreshToken,
//         });
//         localStorage.setItem("access", response.data.access);
//         return response.data;
//     }
//     catch (error) {
//         throw error;
//     }
// };

