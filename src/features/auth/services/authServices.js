import { api } from "../../../shared/services/api";

function normalizeApiError(error) {
    if (error.response?.data) {
        return error.response.data;
    }

    if (error.message) {
        return { message: error.message };
    }

    return { message: "Unexpected error" };
}

export async function registerUser(data) {
    try {
        const response = await api.post('/register' , data);
        return response.data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}

export async function loginUser(data) {
    try {
        const response = await api.post('/login' , data);
        return response.data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}

export async function logoutUser() {
    try {
        const response = await api.post('/logout');
        return response.data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}

export async function getMe() {
    try {
        const response = await api.get('/user/profile');
        return response.data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
