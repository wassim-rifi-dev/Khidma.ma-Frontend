import { api } from "../api";

export async function getAllUser() {
    try {
        const response = await api.get('admin/users');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}