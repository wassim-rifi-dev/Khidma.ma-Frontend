import { api } from "./api";

export async function getAllCategories() {
    try {
        const response = await api.get("/categories");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
