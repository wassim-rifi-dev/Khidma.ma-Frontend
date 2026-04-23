import { api } from "../api";

export async function getAllUser() {
    try {
        const response = await api.get('admin/users');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateUserStatus(userId) {
    try {
        const response = await api.patch(`admin/users/${userId}/status`);

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}