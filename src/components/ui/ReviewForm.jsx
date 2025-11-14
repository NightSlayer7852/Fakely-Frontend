// src/components/ui/ReviewForm.jsx

import React from 'react';
import useReview from '../../handlers/useReview.js'; // Assumed path

// Define color constants
const ACCENT_COLOR = 'text-orange-700';
const PRIMARY_BUTTON_BG = 'bg-orange-600';
const PRIMARY_BUTTON_HOVER = 'hover:bg-orange-700';
const FOCUS_RING = 'focus:ring-yellow-500';
const FOCUS_BORDER = 'focus:border-yellow-500';

export default function ReviewForm({ onReviewSubmitted }) {
    const {
        isLoading,
        title,
        setTitle,
        text,
        setText,
        error,
        handleSubmit,
    } = useReview();

    const handleFormSubmit = async (event) => {
        try {
            const data = await handleSubmit(event);
            if (onReviewSubmitted) {
                onReviewSubmitted(data);
            }
        } catch (err) {
            console.error("Review form failed submission attempt:", err);
        }
    };

    return (
        // Clean white card with soft shadow
        <div className="max-w-xl bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transition-shadow duration-300">

            {/* Header: Deep Orange Accent */}
            <h2 className={`text-3xl font-extrabold ${ACCENT_COLOR} mb-6`}>Submit New Review</h2>

            <form onSubmit={handleFormSubmit} className="space-y-5">

                {/* Title Input */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    // Input Style: Soft neutral background, strong yellow focus ring
                    className={`w-full p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 ${FOCUS_RING} ${FOCUS_BORDER} focus:outline-none transition-all duration-200`}
                    required
                />

                {/* Text Area Input */}
                <textarea
                    placeholder="Review Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    // Textarea Style: Matches input style
                    className={`w-full p-4 border border-gray-300 rounded-lg h-32 resize-none bg-gray-50 text-gray-800 focus:ring-2 ${FOCUS_RING} ${FOCUS_BORDER} focus:outline-none transition-all duration-200`}
                    required
                ></textarea>

                {error && <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    // Button Style: Strong orange with hover state
                    className={`w-full ${PRIMARY_BUTTON_BG} text-white p-4 rounded-xl font-bold text-lg ${PRIMARY_BUTTON_HOVER} disabled:opacity-60 transition-all duration-200 transform active:scale-[0.99]`}
                >
                    {isLoading ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
}