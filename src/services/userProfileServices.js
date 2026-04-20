import {api} from './api';

export async function getInfo() {
    try {
        const response = await api.get('user/profile');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateInfo(data) {
    try {
        const response = await api.put('user/profile/update' , data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}