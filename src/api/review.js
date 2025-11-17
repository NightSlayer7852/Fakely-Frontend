import api from './api.js';
import { getCsrfToken, getCsrfConfig } from '../api/auth.js';
export const postReview = async (title, text) => {
    try {
        const csrfToken = await getCsrfToken();
        const config = getCsrfConfig(csrfToken);
        const response = await api.post(`/api/v1/reviews/`, {
            title,
            text,
        }
            , config);
        console.log("Review submission response data:", response.data); 
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
    const csrfToken = await getCsrfToken();
    const config = getCsrfConfig(csrfToken);
    try {
        const response = await api.delete(`/api/v1/reviews/${id}/`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};