// src/components/Sidebar.jsx

import React from 'react';

export default function Sidebar({ reviews, onSearchChange, searchTerm, isListLoading }) {
    const displayReviews = reviews || [];

    return (
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-full overflow-y-auto p-4 shadow-xl">

            {/* Search/Filter Section */}
            <div className="mb-6 pb-2 border-b">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Search Reviews</h3>
                <input
                    type="text"
                    placeholder="Filter by title or content..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Existing Reviews List */}
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Your Past Reviews</h3>

                {isListLoading && <p className="text-center text-gray-500">Loading reviews...</p>}

                {!isListLoading && displayReviews.length === 0 && (
                    <p className="text-gray-500 text-sm italic">
                        No matching reviews found.
                    </p>
                )}

                {/* List of Reviews (Scrollable) */}
                <ul className="space-y-3">
                    {displayReviews.map((review) => (
                        <li
                            key={review.id}
                            className="p-3 text-sm rounded-lg bg-white shadow hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                            <p className="font-medium text-blue-600 truncate">{review.title}</p>
                            <p className="text-gray-600 truncate">{review.text.substring(0, 40)}...</p>
                            <p className="text-xs text-gray-400 mt-1">
                                Fake status: {review.is_fake ? 'DETECTED' : 'Genuine'}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}