import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [access, setAccess] = useState(localStorage.getItem('access') || null);
    const [refresh, setRefresh] = useState(localStorage.getItem('refresh') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginUser = (userData, accessToken, refreshToken) => {
        setUser(userData);
        setAccess(accessToken);
        setRefresh(refreshToken);
        localStorage.setItem('access', accessToken);
        localStorage.setItem('refresh', refreshToken);
    }
    const logoutUser = () => {
        setUser(null);
        setAccess(null);
        setRefresh(null);
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    }

    useEffect(() => {
        setIsAuthenticated(!!access);
    }, [access]);

    const value = {
        user,
        access,
        refresh,
        isAuthenticated,
        loginUser,
        logoutUser
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}