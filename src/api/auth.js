import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signin/`, {
            username,
            password
        });
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export const signup = async (username, email, password, password2) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signup/`, {
            username,
            email,
            password,
            password2,
        });
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Signup failed:", error);
        throw error;
    }
};