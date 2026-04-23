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

export async function updateCategorie(categorieId , data) {
    try {
        const response = await api.put(`admin/category/update/${categorieId}` , data);

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}