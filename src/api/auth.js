// // src/api/auth.js

// import api from './api.js';

// // Login: The server sets the cookie upon success
// export const login = async (username, password) => {
//     try {
//         const response = await api.post(`/api/v1/auth/signin/`, { username, password });
//         // Server response only contains 'user' object and 'message'
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

// // Signup: The server sets the cookie upon success
// export const signup = async (username, email, password, password2) => {
//     try {
//         const response = await api.post(`/api/v1/auth/signup/`, { username, email, password, password2 });
//         // Server response only contains 'user' object and 'message'
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

// // Logout: No payload required, destroys session
// export const logout = async () => {
//     try {
//         await api.post(`/api/v1/auth/signout/`);
//     } catch (error) {
//         throw error;
//     }
// };

// src/api/auth.js

import api from './api.js';

export const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// 🔑 Now, simplify getCsrfToken to ensure the cookie is set, but read it locally
export const getCsrfToken = async () => {
    // 1. Call the backend GET endpoint just to force the 'csrftoken' cookie to be set.
    await api.get('/api/v1/auth/csrf/');

    // 2. Read the token directly from the browser's document.cookie storage.
    const csrfToken = getCookie('csrftoken');

    if (!csrfToken) {
        throw new Error("CSRF token could not be retrieved from cookies.");
    }
    return csrfToken;
};

// --- Helper function to configure Axios headers for CSRF ---
export const getCsrfConfig = (token) => ({
    headers: {
        'X-CSRFToken': token,
    },
});

// --- Login: The server sets the cookie upon success ---
export const login = async (username, password) => {
    try {
        // 🔑 FIX 1 & 2: Declare csrfToken and use correct configuration
        const csrfToken = await getCsrfToken();
        const config = getCsrfConfig(csrfToken);

        const response = await api.post(
            `/api/v1/auth/signin/`,
            { username, password },
            config // Attach X-CSRFToken header only for this request
        );
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

// --- Signup: The server sets the cookie upon success ---
export const signup = async (username, email, password, password2) => {
    try {
        // 🔑 FIX 3: Signup also requires fetching and sending the CSRF token
        const csrfToken = await getCsrfToken();
        const config = getCsrfConfig(csrfToken);

        const response = await api.post(
            `/api/v1/auth/signup/`,
            { username, email, password, password2 },
            config // Attach X-CSRFToken header only for this request
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

// --- Logout: No payload required, destroys session ---
export const logout = async () => {
    try {
        // 🔑 Logout is also a POST request and requires CSRF protection
        const csrfToken = await getCsrfToken();
        const config = getCsrfConfig(csrfToken);

        await api.post(`/api/v1/auth/signout/`, {}, config);
    } catch (error) {
        throw error;
    }
};