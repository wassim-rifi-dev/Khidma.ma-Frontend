import { api } from "./api";

export async function getTopProfessionals() {
    try {
        const response = await api.get("/professionals/top");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
