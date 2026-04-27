import { api } from "../../../shared/services/api";

export async function getTopProfessionals() {
    try {
        const response = await api.get("/professionals/top");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getProfessionalById(professionalId) {
    try {
        const response = await api.get(`/professionals/${professionalId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}