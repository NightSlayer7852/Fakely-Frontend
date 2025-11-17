// src/components/Navbar.jsx

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import ToggleButton from '../ui/ToggleButton.jsx';
import SlideTabs from '../ui/SlideTabs.jsx';
export default function Navbar() {
    const { user, isAuthenticated, logoutUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/');
        } catch (error) {
            console.error("Logout failed:", error);
            navigate('/');
        }
    };

    const navItems = [
        { name: 'Home', path: '/home' },
        { name: 'Profile', path: '/profile' },
        { name: 'Review', path: '/review' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];


    return (
        <div className="navbar bg-base-300 shadow-sm shadow-secondary motion-preset-slide-down">
            <div className="navbar-start">
                {/* Logo/Brand */}
                <Link to="/home" className="flex px-7 text-xl font-bold">
                    <img src="/src/assets/logo.png" alt="Fakely Logo" className="inline-block w-8 h-8 mr-2" />
                    <span className= "text-primary">FAKELY</span>
                </Link>
            </div>
            <div className="navbar-center ">
                <SlideTabs />
            </div>
            <div className="navbar-end hidden lg:flex px-7">

                <ToggleButton/>
                {isAuthenticated ? (
                    <button
                        onClick={handleLogout}
                        className={`btn btn-secondary`}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/" className="btn btn-sm btn-primary">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
}