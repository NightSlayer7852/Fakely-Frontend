// src/components/Sidebar.jsx

import React from 'react';

export default function Sidebar({ reviews, onSearchChange, searchTerm, isListLoading }) {
    const displayReviews = reviews || [];

    // Define the warm color palette using orange, yellow, and soft neutrals
    const MAIN_BG = 'bg-orange-50';          // Softest background (Creamy white)
    const ACCENT_ORANGE = 'text-orange-600';  // Main highlight color
    const BUTTON_BG = 'bg-yellow-400';        // Button/input focus color (Gold/Yellow)
    const TEXT_DARK = 'text-gray-800';        // Dark text for high contrast
    const BORDER_SOFT = 'border-orange-200';  // Soft border lines

    return (
        // 🔑 Updated Container: Soft cream background with subtle shadow
        <div className={`w-64 ${MAIN_BG} border-r ${BORDER_SOFT} flex flex-col h-full overflow-y-auto p-4 shadow-lg`}>

            {/* Search/Filter Section */}
            <div className="mb-6 pb-2 border-b ${BORDER_SOFT}">
                <h3 className={`text-lg font-semibold ${TEXT_DARK} mb-2`}>Search Reviews</h3>
                <input
                    type="text"
                    placeholder="Filter by title or content..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    // 🔑 Input Style: White background, soft border, yellow/gold focus
                    className={`w-full px-3 py-2 border ${BORDER_SOFT} rounded-md bg-white ${TEXT_DARK} placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500`}
                />
            </div>

            {/* Existing Reviews List */}
            <div className="flex-grow">
                <h3 className={`text-lg font-semibold ${TEXT_DARK} mb-3 border-b ${BORDER_SOFT} pb-1`}>Your Past Reviews</h3>

                {isListLoading && <p className={`text-center text-gray-600`}>Loading reviews...</p>}

                {!isListLoading && displayReviews.length === 0 && (
                    <p className={`text-gray-500 text-sm italic`}>
                        No matching reviews found.
                    </p>
                )}

                {/* List of Reviews (Scrollable) */}
                <ul className="space-y-3">
                    {displayReviews.map((review) => (
                        <li
                            key={review.id}
                            // 🔑 List Item Style: Clean white background, orange hover
                            className={`p-3 text-sm rounded-lg bg-white shadow-sm hover:bg-orange-100 cursor-pointer transition-colors border ${BORDER_SOFT}`}
                        >
                            {/* Title uses the main orange accent */}
                            <p className={`font-medium ${ACCENT_ORANGE} truncate`}>{review.title}</p>
                            <p className={`text-gray-600 truncate`}>{review.text.substring(0, 40)}...</p>
                            <p className="text-xs text-gray-500 mt-1">
                                Fake status: {review.is_fake ? 'DETECTED' : 'Genuine'}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}