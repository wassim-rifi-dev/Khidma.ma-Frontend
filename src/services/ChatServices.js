import { api } from "./api";

export async function getChats() {
    try {
        const response = await api.get("/chats");
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getChatMessages(chatId) {
    try {
        const response = await api.get(`/chat/${chatId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function createMessage(chatId , data) {
    try {
        const response = await api.post(`/message/store/${chatId}` , data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
