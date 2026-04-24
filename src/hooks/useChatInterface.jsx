import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createMessage, getChatMessages, getChats } from "../services/ChatServices";
import { API_BASE_URL } from "../services/api";

function getMaxMessageIdFromConversations(items) {
    return items.reduce((maxId, item) => Math.max(maxId, Number(item?.last_message_id || 0)), 0);
}

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

export default function useChatInterface(enabled = true, preferredChatId = null) {
    const { user } = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [draft, setDraft] = useState("");
    const [loadingConversations, setLoadingConversations] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    const cursorRef = useRef(0);

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
                cursorRef.current = Math.max(cursorRef.current, getMaxMessageIdFromConversations(items));
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
        }, 15000);

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
                    cursorRef.current = Math.max(
                        cursorRef.current,
                        ...items.map((item) => Number(item?.id || 0))
                    );
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

        return () => {
            cancelled = true;
        };
    }, [activeChatId, enabled]);

    useEffect(() => {
        if (!enabled || !user) {
            return undefined;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            return undefined;
        }

        const abortController = new AbortController();
        let reconnectTimer = null;
        let stopped = false;

        const connect = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/chat/stream?cursor=${cursorRef.current}`, {
                    headers: {
                        Accept: "text/event-stream",
                        Authorization: `Bearer ${token}`,
                    },
                    signal: abortController.signal,
                });

                if (!response.ok || !response.body) {
                    throw new Error("Unable to start chat stream.");
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";

                while (!stopped) {
                    const { done, value } = await reader.read();

                    if (done) {
                        break;
                    }

                    buffer += decoder.decode(value, { stream: true });
                    const chunks = buffer.split("\n\n");
                    buffer = chunks.pop() || "";

                    chunks.forEach((chunk) => {
                        const lines = chunk.split("\n");
                        const eventLine = lines.find((line) => line.startsWith("event:"));
                        const dataLine = lines.find((line) => line.startsWith("data:"));

                        if (!eventLine || !dataLine) {
                            return;
                        }

                        const eventName = eventLine.replace("event:", "").trim();
                        const payload = JSON.parse(dataLine.replace("data:", "").trim());

                        if (payload?.cursor) {
                            cursorRef.current = Math.max(cursorRef.current, Number(payload.cursor));
                        }

                        if (eventName !== "message.created" || !payload?.message) {
                            return;
                        }

                        const incomingMessage = payload.message;

                        setConversations((current) => {
                            const hasConversation = current.some((conversation) => conversation.id === incomingMessage.chat_id);

                            if (!hasConversation) {
                                getChats()
                                    .then((chatResponse) => {
                                        const items = chatResponse?.data?.conversations || [];
                                        setConversations(items);
                                        cursorRef.current = Math.max(cursorRef.current, getMaxMessageIdFromConversations(items));
                                    })
                                    .catch(() => {});

                                return current;
                            }

                            return mergeConversationUpdate(current, incomingMessage);
                        });
                        setMessages((current) => {
                            if (incomingMessage.chat_id !== activeChatId) {
                                return current;
                            }

                            if (current.some((message) => message.id === incomingMessage.id)) {
                                return current;
                            }

                            return [...current, incomingMessage];
                        });
                    });
                }
            } catch (streamError) {
                if (!abortController.signal.aborted) {
                    reconnectTimer = window.setTimeout(connect, 1500);
                }
            }
        };

        connect();

        return () => {
            stopped = true;
            abortController.abort();
            if (reconnectTimer) {
                window.clearTimeout(reconnectTimer);
            }
        };
    }, [activeChatId, enabled, user]);

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
                cursorRef.current = Math.max(cursorRef.current, Number(newMessage.id || 0));
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
