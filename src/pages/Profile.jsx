import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import useProfile from '../handlers/useProfile.js';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaFeatherAlt, FaPowerOff } from 'react-icons/fa';

export default function Profile() {
    const { profileData, isLoading, error } = useProfile();
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate('/');
    };

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen bg-base-100">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </main>
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

            <main className="flex-grow container mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">

                    {/* LEFT COLUMN: Profile Card */}
                    <div className="card bg-base-100 shadow-xl border border-base-300 p-6 flex flex-col items-center text-center rounded-2xl">
                        <div className="avatar mb-4">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
                                {hasProfilePic ? (
                                    <img src={profile.profile_picture} alt="Profile" />
                                ) : (
                                    <FaUserCircle className="w-full h-full p-2 bg-gray-200 text-gray-500" />
                                )}
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold text-primary">{profileData.username}</h1>
                        <p className="text-gray-500 mb-3">{profileData.email}</p>

                        <button onClick={handleLogout} className="btn btn-error w-full mt-4 shadow-md">
                            <FaPowerOff /> Logout
                        </button>
                    </div>

                    {/* RIGHT SIDE: INFO SECTIONS */}
                    <div className="lg:col-span-2 flex flex-col space-y-8">

                        {/* ACCOUNT DETAILS */}
                        <div className="card bg-base-100 shadow-lg border border-base-300 p-6 rounded-2xl">
                            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Account Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Detail Item */}
                                <Detail label="Username" value={profileData.username} icon={FaUserCircle} />
                                <Detail label="Email" value={profileData.email} icon={FaEnvelope} />
                                <Detail label="User ID" value={profileData.id} icon={FaFeatherAlt} />
                                <Detail
                                    label="Trusted Reviewer"
                                    value={profile.is_trusted_reviewer ? "Yes" : "No"}
                                    icon={FaFeatherAlt}
                                    color={profile.is_trusted_reviewer ? "text-success" : "text-error"}
                                />
                            </div>
                        </div>

                        {/* PROFILE DETAILS */}
                        <div className="card bg-base-100 shadow-lg border border-base-300 p-6 rounded-2xl">
                            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Profile & Activity</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Detail label="Location" value={profile.location || "N/A"} icon={FaMapMarkerAlt} />
                                <Detail label="Total Reviews" value={profile.total_reviews_submitted} icon={FaFeatherAlt} />
                            </div>

                            {/* Bio Section */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-700 mb-1">Bio:</h3>
                                <p className="p-4 bg-base-200 border border-base-300 rounded-xl italic text-gray-600">
                                    {profile.bio || "No biography provided yet."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Reusable detail component
function Detail({ label, value, icon: Icon, color = "text-base-content" }) {
    return (
        <div className="flex items-center gap-3 p-3 bg-base-200 rounded-xl shadow-sm">
            <Icon className="w-5 h-5 text-primary" />
            <span className="font-semibold w-32 text-gray-600">{label}:</span>
            <span className={`font-medium ${color}`}>{value}</span>
        </div>
    );
}