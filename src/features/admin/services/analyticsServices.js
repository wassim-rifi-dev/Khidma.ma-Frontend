import { api } from "../../../shared/services/api";

export async function getAdminAnalytics() {
    try {
        const response = await api.get("admin/analytics");

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
