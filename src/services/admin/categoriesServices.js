import { api } from "../api";

export async function getAllCategories() {
    try {
        const response = await api.get('admin/categories');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function createCategorie(data) {
    try {
        const response = await api.post('admin/category/store' , data);

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}