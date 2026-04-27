import { api } from "../../../shared/services/api";

export async function getClientRequest() {
    try {
        const response = await api.get('client/request');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getClientRequestCount() {
    try {
        const response = await api.get('client/request/count');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getCompletedClientRequestCount() {
    try {
        const response = await api.get('client/request/count/completed');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getLastThreeClientRequest() {
    try {
        const response = await api.get('client/request/latest');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getLastSixClientRequest() {
    try {
        const response = await api.get('client/request/latest-six');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function createRequest(serviceId , data) {
    try {
        const response = await api.post(`request/store/${serviceId}` , data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function cancelRequest(requestId) {
    try {
        const response = await api.put(`request/cancel/${requestId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}