// src/pages/Profile.jsx

import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import useProfile from '../handlers/useProfile.js';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
// Using DaisyUI's icons within buttons/elements where appropriate
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaFeatherAlt, FaPowerOff } from 'react-icons/fa';

// --- Helper Component for Detail Rows (using standard DaisyUI text colors) ---
const DetailRow = ({ icon: Icon, label, value, colorClass = 'text-base-content' }) => (
    <div className="flex items-center space-x-3 p-3 bg-base-200 rounded-lg">
        <Icon className="w-5 h-5 text-primary" />
        <span className="font-semibold text-gray-600 w-36">{label}:</span>
        <span className={`flex-grow font-medium ${colorClass}`}>{value}</span>
    </div>
);

export default function Profile() {
    const { profileData, isLoading, error } = useProfile();
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate('/');
    };

    // --- Render States ---
    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen bg-base-100">
                <Navbar />
                <main className="flex-grow flex items-center justify-center"><span className="loading loading-spinner loading-lg text-primary"></span></main>
                <Footer />
            </div>
        );
    }

    if (error || !profileData) {
        return (
            <div className="flex flex-col min-h-screen bg-base-100">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div role="alert" className="alert alert-error max-w-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error || "Failed to load profile data. Please try again."}</span>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const profile = profileData.profile || {};
    const hasProfilePic = profile.profile_picture;

    return (
        <div className="flex flex-col min-h-screen bg-base-200">
            <Navbar />

            <main className="flex-grow container mx-auto p-8">

                {/* 🔑 MAIN CARD CONTAINER: Max width with pronounced shadow */}
                <div className="card lg:card-side bg-base-100 shadow-2xl max-w-5xl mx-auto mt-10 border border-base-200">

                    {/* CARD BODY */}
                    <div className="card-body p-0 lg:flex-row">

                        {/* LEFT COLUMN: Profile Picture & Header */}
                        <div className="p-8 border-b lg:border-b-0 lg:border-r border-base-200 lg:w-1/3 flex flex-col items-center justify-start text-center bg-base-100">

                            {/* Profile Picture/Avatar */}
                            <div className="avatar mb-6 mt-4">
                                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {hasProfilePic ? (
                                        <img src={profile.profile_picture} alt="Profile" />
                                    ) : (
                                        <FaUserCircle className="w-full h-full p-2 bg-gray-200 text-gray-500" />
                                    )}
                                </div>
                            </div>

                            <h1 className="text-3xl font-extrabold text-primary mb-1">
                                {profileData.username}
                            </h1>
                            <p className="text-gray-500 text-sm">{profileData.email}</p>

                            {/* Logout Button in the left column */}
                            <div className="mt-8 w-full">
                                <button
                                    onClick={handleLogout}
                                    className={`btn btn-error w-full shadow-lg`}
                                >
                                    <FaPowerOff /> Log Out
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Details Grid */}
                        <div className="p-8 lg:w-2/3">
                            <h2 className="text-2xl font-bold text-base-content mb-6 border-b pb-2">Account and Status</h2>

                            {/* Section 1: Core Details */}
                            <div className="space-y-3 mb-8">
                                <DetailRow icon={FaUserCircle} label="Username" value={profileData.username} />
                                <DetailRow icon={FaEnvelope} label="Email" value={profileData.email} />
                                <DetailRow icon={FaFeatherAlt} label="User ID" value={profileData.id} />
                                <DetailRow
                                    icon={FaFeatherAlt}
                                    label="Trusted Reviewer"
                                    value={profile.is_trusted_reviewer ? "Yes" : "No"}
                                    colorClass={profile.is_trusted_reviewer ? 'text-success' : 'text-error'}
                                />
                            </div>

                            {/* Section 2: Bio and Stats */}
                            <h2 className="text-2xl font-bold text-base-content mb-6 border-b pb-2">Profile & Contribution</h2>
                            <div className="space-y-4">

                                <DetailRow icon={FaMapMarkerAlt} label="Location" value={profile.location || "N/A"} />
                                <DetailRow icon={FaFeatherAlt} label="Total Reviews" value={profile.total_reviews_submitted} />

                                <div className="pt-4">
                                    <p className="font-semibold text-gray-600 mb-2 flex items-center">
                                        Bio:
                                    </p>
                                    <p className="text-gray-700 italic border border-base-300 p-3 rounded-lg bg-base-200">
                                        {profile.bio || "No biography provided yet."}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}