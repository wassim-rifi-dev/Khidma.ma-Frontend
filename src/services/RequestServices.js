import { api } from "./api";

export async function getClientRequest() {
    try {
        const response = await api.get('client/request');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}