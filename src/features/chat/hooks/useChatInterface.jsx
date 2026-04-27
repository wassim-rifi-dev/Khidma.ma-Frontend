import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../auth/authContext";
import { createMessage, getChatMessages, getChats } from "../services/ChatServices";
import { updateProfessionalRequestStatus } from "../../services/services/RequestServices";

function mergeConversationUpdate(current, message) {
    const existingConversation = current.find((conversation) => conversation.id === message.chat_id);

    if (!existingConversation) {
        return current;
    }

    const updatedConversation = {
        ...existingConversation,
        last_message: message.message,
        last_message_id: message.id,
        last_message_type: message.message_type,
        last_message_media_url: message.media_url,
        last_message_sender_id: message.sender_id,
        last_message_at: message.created_at,
        updated_at: message.created_at,
    };

    return [
        updatedConversation,
        ...current.filter((conversation) => conversation.id !== message.chat_id),
    ];
}

function updateRequestPayloadInMessages(current, requestId, status) {
    return current.map((message) => {
        if (message.message_type !== "request" || !message.media_url) {
            return message;
        }

        try {
            const payload = JSON.parse(message.media_url);

            if (Number(payload?.request_id) !== Number(requestId)) {
                return message;
            }

            return {
                ...message,
                media_url: JSON.stringify({
                    ...payload,
                    status,
                }),
            };
        } catch {
            return message;
        }
    });
}

export default function useChatInterface(enabled = true, preferredChatId = null) {
    const { user } = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [draft, setDraft] = useState("");
    const [loadingConversations, setLoadingConversations] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [sending, setSending] = useState(false);
    const [updatingRequestId, setUpdatingRequestId] = useState(null);
    const [error, setError] = useState("");

    const activeConversation = useMemo(
        () => conversations.find((conversation) => conversation.id === activeChatId) || null,
        [activeChatId, conversations]
    );

    useEffect(() => {
        if (!enabled || !user) {
            return undefined;
        }

        let cancelled = false;

        const loadConversations = async ({ silent = false } = {}) => {
            if (!silent) {
                setLoadingConversations(true);
            }

            try {
                const response = await getChats();
                const items = response?.data?.conversations || [];

                if (cancelled) {
                    return;
                }

                setConversations(items);
                setError("");
                setActiveChatId((currentId) => {
                    if (preferredChatId && items.some((item) => item.id === preferredChatId)) {
                        return preferredChatId;
                    }

                    if (currentId && items.some((item) => item.id === currentId)) {
                        return currentId;
                    }

                    return items[0]?.id ?? null;
                });
            } catch (requestError) {
                if (!cancelled) {
                    setError(requestError?.message || "Unable to load conversations.");
                }
            } finally {
                if (!cancelled && !silent) {
                    setLoadingConversations(false);
                }
            }
        };

        loadConversations();

        const intervalId = window.setInterval(() => {
            loadConversations({ silent: true });
        }, 5000);

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
    }, [enabled, preferredChatId, user]);

    useEffect(() => {
        if (!preferredChatId || conversations.length === 0) {
            return;
        }

        if (conversations.some((conversation) => conversation.id === preferredChatId)) {
            setActiveChatId(preferredChatId);
        }
    }, [conversations, preferredChatId]);

    useEffect(() => {
        if (!enabled || !activeChatId) {
            setMessages([]);
            return undefined;
        }

        let cancelled = false;

        const loadMessages = async ({ silent = false } = {}) => {
            if (!silent) {
                setLoadingMessages(true);
            }

            try {
                const response = await getChatMessages(activeChatId);
                const items = response?.data?.messages || [];

                if (!cancelled) {
                    setMessages(items);
                    setError("");
                }
            } catch (requestError) {
                if (!cancelled) {
                    setError(requestError?.message || "Unable to load messages.");
                }
            } finally {
                if (!cancelled && !silent) {
                    setLoadingMessages(false);
                }
            }
        };

        loadMessages();

        const intervalId = window.setInterval(() => {
            loadMessages({ silent: true });
        }, 5000);

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
    }, [activeChatId, enabled]);

    const sendMessage = async () => {
        const content = draft.trim();

        if (!content || !activeChatId || sending) {
            return;
        }

        setSending(true);

        try {
            const response = await createMessage(activeChatId, {
                message: content,
                message_type: "text",
            });

            const newMessage = response?.data?.message;

            if (newMessage) {
                setMessages((current) => current.some((message) => message.id === newMessage.id) ? current : [...current, newMessage]);
                setConversations((current) => mergeConversationUpdate(current, newMessage));
            }

            setDraft("");
            setError("");
        } catch (requestError) {
            setError(requestError?.message || "Unable to send your message.");
        } finally {
            setSending(false);
        }
    };

    const respondToRequest = async (requestId, status) => {
        if (!requestId || updatingRequestId) {
            return false;
        }

        setUpdatingRequestId(requestId);

        try {
            await updateProfessionalRequestStatus(requestId, status);
            setMessages((current) => updateRequestPayloadInMessages(current, requestId, status));
            setError("");
            return true;
        } catch (requestError) {
            setError(requestError?.message || "Unable to update request status.");
            return false;
        } finally {
            setUpdatingRequestId(null);
        }
    };

    return {
        activeChatId,
        activeConversation,
        conversations,
        draft,
        error,
        loadingConversations,
        loadingMessages,
        messages,
        sending,
        updatingRequestId,
        setActiveChatId,
        setDraft,
        respondToRequest,
        sendMessage,
        user,
    };
}
