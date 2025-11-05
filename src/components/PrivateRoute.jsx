// src/components/PrivateRoute.jsx

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function PrivateRoute() {
    // Rely solely on context for state
    const { isAuthenticated, isAuthReady } = useAuth();

    // 1. Show loading while the session status is checked
    if (!isAuthReady) {
        return <div className="text-center p-8">Checking session status...</div>;
    }

    // 2. If check is complete and NOT authorized, redirect
    if (!isAuthenticated) {
        return <Navigate to="/" replace />; // Redirect to Auth page
    }

    // 3. Render the protected child route
    return <Outlet />;
}