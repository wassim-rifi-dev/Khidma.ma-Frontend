import { api } from "../../../shared/services/api";

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

export async function getTotalUsersCount() {
    try {
        const response = await api.get('admin/users/count/total');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getActiveUsersCount() {
    try {
        const response = await api.get('admin/users/count/active');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getAdminsCount() {
    try {
        const response = await api.get('admin/users/count/admins');

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
