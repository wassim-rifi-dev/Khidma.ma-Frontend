import { api } from "./api";

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

export async function getLastThreeClientRequest() {
    try {
        const response = await api.get('client/request/latest');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}