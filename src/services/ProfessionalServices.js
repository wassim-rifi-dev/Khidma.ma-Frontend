import { api } from "./api";

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

export async function getMyProfessionalProfile() {
    try {
        const response = await api.get("/profissional/profile");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateProfessionalProfile(data) {
    try {
        const response = await api.put("/professional/profile/update", data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
