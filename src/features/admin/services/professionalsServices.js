import { api } from "../../../shared/services/api";

export async function getAllProfessional() {
    try {
        const response = await api.get('admin/professionals');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getActiveProfessionalsCount() {
    try {
        const response = await api.get('admin/professionals/count');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateVerifyProfessionalStatus(professionalId , data) {
    try {
        const response = await api.patch(`admin/professionals/${professionalId}/verify` , data);

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
