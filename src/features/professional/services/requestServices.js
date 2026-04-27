import { api } from "../../../shared/services/api";

export async function getProfessionalRequests() {
    try {
        const response = await api.get("professional/request");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getProfessionalRequestById(requestId) {
    try {
        const response = await api.get(`professional/request/${requestId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateProfessionalRequestStatus(requestId, status) {
    try {
        const response = await api.put(`request/update-status/${requestId}`, { status });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}