import { api } from "./api";

export async function getChatMessages(chatId) {
    try {
        const response = await api.get(`chat/${chatId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}