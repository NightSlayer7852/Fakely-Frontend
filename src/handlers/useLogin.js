// src/handlers/useLogin.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../contexts/AuthContext.jsx";
import toast from 'react-hot-toast';

function useLogin() {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        login(username, password)
            .then((data) => {
                loginUser(data.user);
                toast.success(data?.message || "Login successful!");
                navigate("/home");
            })
            .catch((err) => {
                const errorMessage = err.response?.data?.error || "Login failed. Check credentials.";
                toast.error(errorMessage);
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { isLoading, error, username, setUsername, password, setPassword, handleLogin };
}
export default useLogin;
// useSignup.js follows the exact same pattern, calling the signup API function.