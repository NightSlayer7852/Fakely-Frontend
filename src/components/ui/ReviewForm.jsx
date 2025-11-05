// src/components/ReviewForm.jsx

import React from 'react';
import useReview from '../../handlers/useReview.js'; // Assumed path

// Receives a callback function to update the list after a successful POST
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

    // Wrap the hook's handleSubmit to handle the promise resolution and call the parent update function
    const handleFormSubmit = async (event) => {
        try {
            // handleSubmit returns a promise that resolves with the new review data
            const data = await handleSubmit(event);

            // If submission was successful, call the parent handler to update the list
            if (onReviewSubmitted) {
                onReviewSubmitted(data);
            }
        } catch (err) {
            // Error handling is managed by the hook (setting the local 'error' state)
            console.error("Review form failed submission attempt:", err);
        }
    };

    return (
        <div className="max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Submit New Review</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">

                {/* Title Input */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    required
                />

                {/* Text Area Input */}
                <textarea
                    placeholder="Review Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:ring-blue-500 focus:border-blue-500"
                    required
                ></textarea>

                {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                    {isLoading ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
}