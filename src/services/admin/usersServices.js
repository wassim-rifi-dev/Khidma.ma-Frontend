import { api } from "../api";

export async function getAllUser() {
    try {
        const response = await api.get('admin/users');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getUserCount() {
    try {
        const response = await api.get('admin/users/count');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateUserStatus(userId , data) {
    try {
        const response = await api.patch(`admin/users/${userId}/status` , data);

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteUser(userId) {
    try {
        const response = await api.delete(`admin/users/${userId}`);

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}