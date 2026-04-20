import { api } from "./api";

export async function getAllServices() {
    try {
        const response = await api.get('/services');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}