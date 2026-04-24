import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createMessage, getChatMessages, getChats } from "../services/ChatServices";

export default function useChatInterface(enabled = true) {
    const { user } = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [draft, setDraft] = useState("");
    const [loadingConversations, setLoadingConversations] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [sending, setSending] = useState(false);
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
        }, 15000);

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
    }, [enabled, user]);

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
                setMessages((current) => [...current, newMessage]);
            }

            setDraft("");
            setError("");

            const refreshedConversations = await getChats();
            const items = refreshedConversations?.data?.conversations || [];
            setConversations(items);
        } catch (requestError) {
            setError(requestError?.message || "Unable to send your message.");
        } finally {
            setSending(false);
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
        setActiveChatId,
        setDraft,
        sendMessage,
        user,
    };
}
