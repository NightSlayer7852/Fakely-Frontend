import React, { useState } from 'react';
import { postReview } from '../api/review';

function useReview() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);
        setError('');

        if (!title || !text) {
            setError("Title and text fields are required.");
            setIsLoading(false);
            return;
        }

        postReview(title, text)
            .then((data) => {
                console.log("Review submitted successfully:", data);
                setTitle('');
                setText('');
            })
            .catch((err) => {
                console.error("Full server error response data:", err.response?.data);
                // Attempt to extract a user-friendly error message
                let errorMessage = "Submission failed.";

                if (err.response && err.response.data) {
                    const firstError = Object.values(err.response.data)[0];
                    errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
                }

                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return {
        isLoading,
        error,
        title,
        setTitle,
        text,
        setText,
        handleSubmit,
    }
}

export default useReview;