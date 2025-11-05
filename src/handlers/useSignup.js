// src/handlers/useSignup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth"; // Assumed path for API calls
import { useAuth } from "../contexts/AuthContext.jsx";

function useSignup() {
    const navigate = useNavigate();
    // 🔑 Get the global state update function
    const { loginUser } = useAuth();

    // Local states for form inputs and process status
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSignup = (event) => {
        event.preventDefault();

        // Optional: Client-side check for password match
        if (password !== password2) {
            setError("Passwords must match.");
            return;
        }

        setIsLoading(true);
        setError(null);

        signup(username, email, password, password2)
            .then((data) => {
                console.log("Signup successful:", data);

                // Data contains { user: {...}, message: "..." }
                // 🔑 The server has set the session cookie; update the global state
                loginUser(data.user);

                // Navigate to a protected page (e.g., /review) after successful login
                navigate("/review");
            })
            .catch((err) => {
                console.error("Signup error:", err);
                // Extract specific error message from the server response
                const errorMessage = err.response?.data?.password?.[0] || // Catch serializer errors
                    err.response?.data?.username?.[0] ||
                    err.response?.data?.email?.[0] ||
                    "Signup failed. Please try again.";
                setError(errorMessage);
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
        email,
        setEmail,
        password,
        setPassword,
        password2,
        setPassword2,
        handleSignup,
    };
}

export default useSignup;