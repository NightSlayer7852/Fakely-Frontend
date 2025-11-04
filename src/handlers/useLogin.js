import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../contexts/AuthContext.jsx";


function useLogin() {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        console.log("Logging in with", { username, password });

        setIsLoading(true);
        setError(null);

        login(username, password)
            .then((data) => {
                console.log("Login successful:", data);
                loginUser(data.user, data.access, data.refresh);

                navigate("/review");

            })
            .catch((error) => {
                console.error("Login error:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        isLoading,
        error,
        username,
        setUsername,
        password,
        setPassword,
        handleLogin
    };
}

export default useLogin;