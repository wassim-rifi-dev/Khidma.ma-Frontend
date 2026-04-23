import { api } from "../api";

export async function getAllServices() {
    try {
        const response = await api.get('admin/services');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteService(serviceId) {
    try {
        const response = await api.delete(`admin/services/${serviceId}`);
    
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}