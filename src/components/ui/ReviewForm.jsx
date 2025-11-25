// src/components/ui/ReviewForm.jsx

import React from 'react';
import useReview from '../../handlers/useReview.js';

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
        <div className="max-w-xl bg-secondary p-8 rounded-xl  h-100 w-150 shadow-md shadow-secondary flex flex-col items-center overflow-hidden ">

            <h2 className={`text-3xl font-extrabold text-secondary-content mb-6`}>Submit New Review</h2>

            <form onSubmit={handleFormSubmit} className="space-y-5 w-100 flex flex-col items-center">

                <input
                    type="text"
                    placeholder="Category"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`input input-secondary w-full`}
                    required
                />

                <textarea
                    placeholder="Review"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={`textarea textarea-secondary w-full h-40`}
                    required
                ></textarea>

                {error && <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn btn-base w-1/2`}
                >
                    {isLoading ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
}