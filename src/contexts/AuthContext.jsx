// src/contexts/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/api.js';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // State to track if the initial check (page load) is complete
    const [isAuthReady, setIsAuthReady] = useState(false);

    // Function to check session status on the backend (used on mount/refresh)
    const checkAuthStatus = async () => {
        try {
            // Calls the backend's /auth/user/ endpoint
            const response = await api.get('/api/v1/auth/user/');

            if (response.status === 200 && response.data.isAuthenticated) {
                setUser(response.data.user);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        } catch (error) {
            // 401/403 errors (invalid session) caught here
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsAuthReady(true);
        }
    };

    // Run initial check on mount
    useEffect(() => {
        checkAuthStatus();
    }, []);

    // Session-based Handlers (used by useLogin/useSignup)
    const loginUser = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    }

    const logoutUser = async () => {
        try {
            // Calls the backend's /auth/signout/ to destroy the server session
            await api.post('/api/v1/auth/signout/');
        } catch (error) {
            console.error("Logout failed on server:", error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            // Browser automatically removes the sessionid cookie
        }
    }

    const value = { user, isAuthenticated, isAuthReady, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}