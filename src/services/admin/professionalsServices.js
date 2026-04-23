import { api } from "../api";

export async function getAllProfessional() {
    try {
        const response = await api.get('admin/professionals');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}