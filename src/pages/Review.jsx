// src/pages/ReviewPage.jsx

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/layout/SideBar.jsx';
import ReviewForm from '../components/ui/ReviewForm.jsx';
import { getReviews } from '../api/review'; // Assumed path

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Function to fetch reviews from the backend
    const fetchReviews = async () => {
        try {
            const data = await getReviews();
            setReviews(data);
        } catch (error) {
            console.error("Error fetching reviews list:", error);
            // You might want to display a list error here
        } finally {
            setIsLoading(false);
        }
    };

    // 🔑 Run once on mount to fetch initial reviews
    useEffect(() => {
        fetchReviews();
    }, []);

    // Handler to update the list after a successful new submission
    const handleNewReview = (newReviewData) => {
        // Prepend the new review to the local state for immediate display
        setReviews(prevReviews => [newReviewData, ...prevReviews]);
        setSearchTerm(''); // Clear search to show the new review
    };

    // Filter reviews for the sidebar display
    const filteredReviews = reviews.filter(review =>
        review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">

            {/* 1. Sidebar Component (Protected List) */}
            <div className="flex-shrink-0">
                <Sidebar
                    reviews={filteredReviews}
                    onSearchChange={setSearchTerm}
                    searchTerm={searchTerm}
                    isListLoading={isLoading}
                />
            </div>

            {/* 2. Main Content Area (Submission Form) */}
            <div className="flex-grow p-8 overflow-y-auto">
                <ReviewForm onReviewSubmitted={handleNewReview} />
            </div>
        </div>
    );
}