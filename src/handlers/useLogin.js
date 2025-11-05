// src/handlers/useLogin.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../contexts/AuthContext.jsx";

function useLogin() {
    const navigate = useNavigate();
    const { loginUser } = useAuth(); // Get global state setter
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
                // Data contains { user: {...}, message: "..." }
                loginUser(data.user); // Update global state
                navigate("/review"); // Navigate to protected page
            })
            .catch((err) => {
                const errorMessage = err.response?.data?.error || "Login failed. Check credentials.";
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