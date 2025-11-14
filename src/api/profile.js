import api from './api.js';
// Assuming logout is also imported/defined here

export const getProfileDetails = async () => {
    try {
        // Hitting the UserStatusView endpoint (GET /api/v1/auth/user/)
        const response = await api.get('/api/v1/auth/profile/');
        // This should return the structure: { user: { id, username, email, profile: {...} } }
        return response.data.user;
    } catch (error) {
        throw error;
    }
};