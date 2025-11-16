// src/components/Navbar.jsx

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import ToggleButton from '../ui/ToggleButton.jsx';

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
        <div className="navbar bg-base-200 shadow-sm shadow-secondary ">
            <div className="navbar-start">
                {/* Logo/Brand */}
                <Link to="/home" className="px-7 text-xl font-bold">
                    <span className= "text-primary">FAKELY</span>
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex px-7">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`
                                        ${isActive ? 'active text-primary font-bold' : 'hover:bg-base-200'}
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <ToggleButton/>
                {isAuthenticated ? (
                    <button
                        onClick={handleLogout}
                        className={`btn btn-secondary`}
                    >
                        Logout
                    </button>
                ) : (
                    // Link to Auth page if not logged in
                    <Link to="/" className="btn btn-sm btn-primary">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
}