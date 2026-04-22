import { api } from "./api";

export async function getAllServices(perPage = 6) {
    try {
        const response = await api.get('/services', {
            params: {
                per_page: perPage,
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
