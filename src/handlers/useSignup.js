import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import { useAuth } from "../contexts/AuthContext.jsx";

function useSignup() {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSignup = (event) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        signup(username, email, password, password2)
            .then((data) => {
                console.log("Signup successful:", data);
                loginUser(data.user, data.access, data.refresh);

                navigate("/home");

            })
            .catch((error) => {
                console.error("Signup error:", error);
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