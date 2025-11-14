// src/handlers/useProfile.js

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getProfileDetails } from '../api/profile.js';

export default function useProfile() {
    // profileData state will hold the full nested object from the API
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    // Fetch the detailed profile data on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfileDetails();
                setProfileData(data);
            } catch (err) {
                setError("Failed to load profile. Session may have expired.");
                // If fetching profile fails (e.g., 401 Unauthorized), log out locally
                logoutUser();
                navigate('/');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, [logoutUser, navigate]);

    return { profileData, isLoading, error };
}