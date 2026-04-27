import { api } from '../../../shared/services/api';

export async function getAllServices(perPage = 6, filters = {}) {
    try {
        const response = await api.get('/services', {
            params: {
                per_page: perPage,
                query: filters.query || undefined,
                category: filters.category || undefined,
                city: filters.city || undefined,
                sort: filters.sort || undefined,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getServiceById(serviceId) {
    try {
        const response = await api.get(`/services/${serviceId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}