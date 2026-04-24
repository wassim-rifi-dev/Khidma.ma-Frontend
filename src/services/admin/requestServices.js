import { api } from "../api";

export async function getOpenRequestsCount() {
    try {
        const response = await api.get('admin/requests/count/open');

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
