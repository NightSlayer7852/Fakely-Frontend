// src/contexts/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/api.js';
import { getCsrfConfig } from '../api/auth.js';

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
    const [isAuthReady, setIsAuthReady] = useState(false);

    const checkAuthStatus = async () => {
        try {
            config = getCsrfConfig( await getCsrfToken() );
            const response = await api.get('/api/v1/auth/user/', config);

            if (response.status !== 200) {
                localStorage.removeItem('isAuthenticated');
            }
            if (response.status === 200 && response.data.isAuthenticated) {
                setUser(response.data.user);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
                localStorage.removeItem('isAuthenticated');
            }
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsAuthReady(true);
        }
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const loginUser = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    }

    const logoutUser = async () => {
        try {
            await api.post('/api/v1/auth/signout/',config);

        } catch (error) {
            console.error("Logout failed on server:", error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            localStorage.removeItem('isAuthenticated');
        }
    }

    const value = { user, isAuthenticated, isAuthReady, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}