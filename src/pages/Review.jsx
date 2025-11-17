// src/pages/ReviewPage.jsx

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/layout/SideBar.jsx';
import ReviewForm from '../components/ui/ReviewForm.jsx';
import { getReviews } from '../api/review';
import ToggleButton from '../components/ui/ToggleButton.jsx';
import Navbar from '../components/layout/Navbar.jsx';

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
        <>
            <div className="absolute top-4 right-4 z-50 ">
                <ToggleButton />
            </div>

            <div className="flex bg-base-200 overflow-hidden">
                <div className="flex-none h-screen overflow-y-auto bg-base-300 motion-preset-slide-right motion-duration-2000 border-t-1 border-b-1 border-r-2 border-primary rounded-r-xl">
                    <Sidebar
                        reviews={filteredReviews}   
                        onSearchChange={setSearchTerm}
                        searchTerm={searchTerm}
                        isListLoading={isLoading}
                    />
                </div>

                <div className="flex flex-auto justify-center items-center p-6 motion-preset-shrink ">
                    <ReviewForm onReviewSubmitted={handleNewReview} />
                </div>
            </div></>

    );
}