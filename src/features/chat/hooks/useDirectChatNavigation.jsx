import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrCreateDirectChat } from "../services/ChatServices";

export default function useDirectChatNavigation() {
    const navigate = useNavigate();
    const [isStartingChat, setIsStartingChat] = useState(false);
    const [chatError, setChatError] = useState("");

    const openDirectChat = async (professionalId) => {
        if (!professionalId || isStartingChat) {
            return;
        }

        setIsStartingChat(true);
        setChatError("");

        try {
            const response = await getOrCreateDirectChat(professionalId);
            const chatId = response?.data?.chat_id;

            if (chatId) {
                navigate(`/messages?chat=${chatId}`);
            }
        } catch (error) {
            setChatError(error?.message || "Unable to open chat right now.");
        } finally {
            setIsStartingChat(false);
        }
    };

    return {
        chatError,
        isStartingChat,
        openDirectChat,
    };
}
