import { api } from "../../../shared/services/api";

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
} //

export async function getServiceById(serviceId) {
    try {
        const response = await api.get(`/services/${serviceId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
} //

export async function getProfessionalServices() {
    try {
        const response = await api.get('professional/services');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getProfessionalServicesSummary() {
    try {
        const response = await api.get('professional/services/summary');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateProfessionalService(serviceId, data) {
    try {
        const response = await api.put(`service/update/${serviceId}`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getTrashedProfessionalServices() {
    try {
        const response = await api.get("service/trashed");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteProfessionalService(serviceId) {
    try {
        const response = await api.delete(`service/delete/${serviceId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function restoreProfessionalService(serviceId) {
    try {
        const response = await api.put(`service/restore/${serviceId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function createProfessionalService(data) {
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
