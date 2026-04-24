import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { createMessage, getChatMessages, getChats } from "../../services/ChatServices";
import getUserPhotoUrl from "../../utils/getUserPhotoUrl";

function parseRequestPayload(value) {
    if (!value) {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

function formatMessageTime(value) {
    if (!value) {
        return "";
    }

    const date = new Date(value);

    return Number.isNaN(date.getTime())
        ? ""
        : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getMessagePreview(conversation) {
    const requestPayload = parseRequestPayload(conversation?.last_message_media_url);

    if (!conversation?.last_message) {
        return "No messages yet";
    }

    if (conversation.last_message_type === "request") {
        return requestPayload?.service_title
            ? `New request: ${requestPayload.service_title}`
            : "New service request";
    }

    return conversation.last_message;
}

function RequestMessageCard({ payload }) {
    return (
        <div className="w-full min-w-[16rem] max-w-[22rem] rounded-[24px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-[#fff4ec] p-4 text-left shadow-[0_10px_30px_rgba(249,115,22,0.12)]">
            <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                    New Request
                </span>
                {payload?.status ? (
                    <span className="text-[11px] font-medium text-slate-400">
                        {payload.status}
                    </span>
                ) : null}
            </div>

            <h4 className="mt-3 text-sm font-semibold text-slate-900">
                {payload?.service_title || "Requested service"}
            </h4>

            <div className="mt-4 space-y-2 text-[12px] text-slate-600">
                {payload?.preferred_date ? (
                    <p>
                        <span className="font-semibold text-slate-800">Date:</span> {payload.preferred_date}
                    </p>
                ) : null}
                {payload?.preferred_time ? (
                    <p>
                        <span className="font-semibold text-slate-800">Time:</span> {payload.preferred_time}
                    </p>
                ) : null}
                {payload?.address ? (
                    <p>
                        <span className="font-semibold text-slate-800">Address:</span> {payload.address}
                    </p>
                ) : null}
                {payload?.price ? (
                    <p>
                        <span className="font-semibold text-slate-800">Budget:</span> {payload.price} {payload.currency || ""}
                    </p>
                ) : null}
            </div>

            {payload?.client_message ? (
                <div className="mt-4 rounded-2xl bg-white/80 px-3 py-3 text-[12px] leading-6 text-slate-600">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Client note
                    </p>
                    <p>{payload.client_message}</p>
                </div>
            ) : null}
        </div>
    );
}

function Avatar({ conversation, className = "h-10 w-10" }) {
    const photoUrl = getUserPhotoUrl(conversation?.participant?.photo);
    const name = conversation?.participant?.name || "Unknown";
    const initial = name.charAt(0).toUpperCase();

    if (photoUrl) {
        return (
            <img
                src={photoUrl}
                alt={name}
                className={`${className} rounded-full object-cover`}
            />
        );
    }

    return (
        <div className={`${className} flex items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600`}>
            {initial}
        </div>
    );
}

export default function Chat({ isOpen }) {
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
        if (!isOpen || !user) {
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
    }, [isOpen, user]);

    useEffect(() => {
        if (!isOpen || !activeChatId) {
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
    }, [activeChatId, isOpen]);

    const handleSendMessage = async () => {
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

    return (
        <div
            className={`fixed bottom-18 right-12 z-50 rounded-2xl shadow-[0_28px_80px_rgba(15,23,42,0.28)] ${
                isOpen ? "block" : "hidden"
            }`}
        >
            <div className="flex h-[34rem] w-[42rem] overflow-hidden rounded-2xl bg-white">
                <div className="flex w-[18rem] flex-col border-r border-[#e7eaef] bg-[#f4f5f7]">
                    <div className="border-b border-[#e7eaef] px-4 py-5">
                        <h2 className="text-[14px] font-bold text-[#252525]">
                            Messages
                        </h2>
                        <p className="mt-1 text-[11px] text-[#7b8190]">
                            {loadingConversations ? "Loading conversations..." : `${conversations.length} conversation${conversations.length === 1 ? "" : "s"}`}
                        </p>
                    </div>

                    <div className="flex flex-1 flex-col overflow-y-auto py-1">
                        {!loadingConversations && conversations.length === 0 ? (
                            <div className="px-4 py-6 text-center text-[12px] text-[#7b8190]">
                                No conversations yet. Start by sending a request to a professional.
                            </div>
                        ) : (
                            conversations.map((conversation) => {
                                const isActive = conversation.id === activeChatId;

                                return (
                                    <button
                                        type="button"
                                        key={conversation.id}
                                        onClick={() => setActiveChatId(conversation.id)}
                                        className={`flex cursor-pointer items-center gap-3 px-4 py-4 text-left transition-colors ${
                                            isActive
                                                ? "bg-white shadow-[inset_4px_0_0_#ff7a00]"
                                                : "hover:bg-white/70"
                                        }`}
                                    >
                                        <div className="relative shrink-0">
                                            <Avatar conversation={conversation} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-[13px] font-semibold leading-none text-[#2d2d2d]">
                                                {conversation.participant?.name || "Unknown user"}
                                            </p>
                                            <p className="mt-1 truncate text-[12px] text-gray-400">
                                                {getMessagePreview(conversation)}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>

                <div className="flex flex-1 flex-col bg-[#fffdfa]">
                    <div className="flex items-center justify-between border-b border-[#f1e9e3] px-4 py-3.5">
                        {activeConversation ? (
                            <div className="flex items-center gap-3">
                                <div className="relative shrink-0">
                                    <Avatar conversation={activeConversation} />
                                </div>

                                <div className="min-w-0">
                                    <span className="block truncate text-[13px] font-semibold text-[#2f2f2f]">
                                        {activeConversation.participant?.name || "Conversation"}
                                    </span>
                                    <span className="text-[12px] text-[#9d9d9d]">
                                        {activeConversation.last_message_at
                                            ? `Last activity ${formatMessageTime(activeConversation.last_message_at)}`
                                            : "No messages yet"}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <span className="block text-[13px] font-semibold text-[#2f2f2f]">
                                    Select a conversation
                                </span>
                                <span className="text-[12px] text-[#9d9d9d]">
                                    Your messages will appear here.
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5">
                        {error ? (
                            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-[12px] text-red-500">
                                {error}
                            </div>
                        ) : null}

                        {loadingMessages && activeChatId ? (
                            <div className="text-center text-[12px] text-[#7b8190]">
                                Loading messages...
                            </div>
                        ) : null}

                        {!loadingMessages && activeChatId && messages.length === 0 ? (
                            <div className="text-center text-[12px] text-[#7b8190]">
                                No messages in this conversation yet.
                            </div>
                        ) : null}

                        {!activeChatId && !loadingConversations ? (
                            <div className="m-auto max-w-[18rem] text-center text-[12px] text-[#7b8190]">
                                Once you have requests and conversations, they will show up here.
                            </div>
                        ) : null}

                        {messages.map((message) => {
                            const isSent = message.sender_id === user?.id;
                            const requestPayload = message.message_type === "request"
                                ? parseRequestPayload(message.media_url)
                                : null;

                            return (
                                <div
                                    key={message.id}
                                    className={`flex max-w-[79%] flex-col ${
                                        isSent ? "self-end items-end" : "items-start"
                                    }`}
                                >
                                    <div
                                        className={`rounded-[22px] px-4 py-3 ${
                                            isSent
                                                ? "rounded-tr-[8px] bg-orange-500 text-white"
                                                : "rounded-tl-[8px] bg-[#f1f2f4] text-[#333333]"
                                        }`}
                                    >
                                        {message.message_type === "request" && requestPayload ? (
                                            <RequestMessageCard payload={requestPayload} />
                                        ) : (
                                            <p className="text-[12px] leading-5">{message.message}</p>
                                        )}
                                        <span
                                            className={`mt-2 block text-[10px] ${
                                                isSent ? "text-orange-100" : "text-[#9d9d9d]"
                                            }`}
                                        >
                                            {formatMessageTime(message.created_at)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="border-t border-[#f1e9e3] px-4 py-4">
                        <div className="flex items-center gap-3 rounded-full bg-[#f1f2f4] px-3 py-2.5">
                            <input
                                type="text"
                                value={draft}
                                onChange={(event) => setDraft(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault();
                                        handleSendMessage();
                                    }
                                }}
                                disabled={!activeChatId || sending}
                                placeholder={activeChatId ? "Type your message..." : "Select a conversation first"}
                                className="flex-1 bg-transparent text-[12px] text-[#4b5563] outline-none placeholder:text-[#8e95a3] disabled:cursor-not-allowed"
                            />

                            <button
                                type="button"
                                onClick={handleSendMessage}
                                disabled={!activeChatId || !draft.trim() || sending}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
                                aria-label="Send message"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.4 20.4 20.85 12 3.4 3.6v6.43l11.04 1.97-11.04 1.97z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
