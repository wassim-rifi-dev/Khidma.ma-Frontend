import { api } from '../api';

export async function getServices() {
    try {
        const response = await api.get('professional/services');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getServicesSummary() {
    try {
        const response = await api.get('professional/services/summary');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateService(serviceId, data) {
    try {
        const response = await api.put(`service/update/${serviceId}`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getTrashedServices() {
    try {
        const response = await api.get("service/trashed");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteService(serviceId) {
    try {
        const response = await api.delete(`service/delete/${serviceId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function restoreService(serviceId) {
    try {
        const response = await api.put(`service/restore/${serviceId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function createService(data) {
    try {
        const response = await api.post("service/store", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}