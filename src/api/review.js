import api from './api.js';

export const postReview = async (title, text) => {
    try {
        const response = await api.post(`/api/v1/reviews/`, {
            title,
            text,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getReviews = async () => {
    try {
        const response = await api.get(`/api/v1/reviews/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getReviewById = async (id) => {
    try {
        const response = await api.get(`/api/v1/reviews/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteReview = async (id) => {
    try {
        const response = await api.delete(`/api/v1/reviews/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};