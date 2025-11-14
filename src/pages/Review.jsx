// src/pages/ReviewPage.jsx

import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Sidebar from '../components/layout/SideBar.jsx'; // Assumed path
import ReviewForm from '../components/ui/ReviewForm.jsx'; // Assumed path
import { getReviews } from '../api/review'; // Assumed path

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            const data = await getReviews();
            setReviews(data);
        } catch (error) {
            console.error("Error fetching reviews list:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [reviews]);

    const handleNewReview = (newReviewData) => {
        setReviews(prevReviews => [newReviewData, ...prevReviews]);
        setSearchTerm('');
    };

    // Filter reviews with safety checks
    const filteredReviews = reviews.filter(review => {
        if (!review) return false;
        const lowerSearchTerm = searchTerm.toLowerCase();
        const titleMatch = review.title?.toLowerCase().includes(lowerSearchTerm) || false;
        const textMatch = review.text?.toLowerCase().includes(lowerSearchTerm) || false;
        return titleMatch || textMatch;
    });

    return (
        // Main container must be flex-col for Navbar/Footer
        <div className="flex flex-col min-h-screen">

            <Navbar />

            <div className="flex flex-grow overflow-hidden bg-gray-100">

                {/* 1. Sidebar Component */}
                <div className="flex-shrink-0">
                    <Sidebar
                        reviews={filteredReviews}
                        onSearchChange={setSearchTerm}
                        searchTerm={searchTerm}
                        isListLoading={isLoading}
                    />
                </div>

                {/* 2. Main Content Area */}
                <main className="flex-grow p-8 overflow-y-auto bg-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <ReviewForm onReviewSubmitted={handleNewReview} />
                    </div>
                </main>
            </div>
        </div>
    );
}