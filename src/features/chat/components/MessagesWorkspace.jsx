import { useMemo, useState } from "react";
import { FiArrowUpRight, FiMapPin, FiSearch, FiSend, FiSmile } from "react-icons/fi";
import { Link } from "react-router-dom";
import useChatInterface from "../hooks/useChatInterface";
import ChatAvatar from "./ChatAvatar";
import RequestMessageCard from "./RequestMessageCard";
import { formatMessageDay, formatMessageTime, getMessagePreview, parseRequestPayload } from "./chatUtils";

const FILTERS = [
    { key: "all", label: "All Messages" },
    { key: "requests", label: "Requests" },
    { key: "recent", label: "Recent" },
];

export default function MessagesWorkspace({ variant = "client", preferredChatId = null }) {
    const {
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
    } = useChatInterface(true, preferredChatId);
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredConversations = useMemo(() => {
        const query = search.trim().toLowerCase();

        return conversations.filter((conversation) => {
            const matchesSearch = !query
                || conversation.participant?.name?.toLowerCase().includes(query)
                || getMessagePreview(conversation).toLowerCase().includes(query);

            if (!matchesSearch) {
                return false;
            }

            if (activeFilter === "requests") {
                return conversation.last_message_type === "request";
            }

            if (activeFilter === "recent") {
                return Boolean(conversation.last_message_at);
            }

            return true;
        });
    }, [activeFilter, conversations, search]);

    const latestRequestPayload = useMemo(() => {
        const latestRequestMessage = [...messages]
            .reverse()
            .find((message) => message.message_type === "request" && message.media_url);

        return latestRequestMessage ? parseRequestPayload(latestRequestMessage.media_url) : null;
    }, [messages]);

    const shellClassName = variant === "professional"
        ? "min-h-0 rounded-2xl bg-[#eef2f7] p-3 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-4 lg:h-full"
        : "min-h-0 rounded-2xl bg-[#edf1f6] p-3 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:p-4 lg:h-full";
    const gridClassName = variant === "professional"
        ? "grid min-h-0 gap-3 lg:h-full xl:grid-cols-[290px_minmax(0,1fr)_270px]"
        : "grid min-h-0 gap-3 lg:h-full xl:grid-cols-[300px_minmax(0,1fr)_280px]";
    const asideClassName = variant === "professional"
        ? "flex min-h-0 flex-col rounded-2xl bg-white p-4 shadow-sm"
        : "flex min-h-0 flex-col rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur";
    const panelRadiusClassName = variant === "professional" ? "rounded-2xl" : "rounded-2xl";

    return (
        <section className={shellClassName}>
            <div className={gridClassName}>
                <aside className={asideClassName}>
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Messages</h1>
                        <p className="mt-2 text-sm text-slate-500">Keep up with requests, replies, and active jobs.</p>
                    </div>

                    <label className="mt-5 flex h-12 items-center gap-3 rounded-full bg-[#f4f6f9] px-4 text-slate-400 transition focus-within:ring-4 focus-within:ring-orange-100">
                        <FiSearch className="h-4 w-4 shrink-0" />
                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search conversations..."
                            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        />
                    </label>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter.key}
                                type="button"
                                onClick={() => setActiveFilter(filter.key)}
                                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                    activeFilter === filter.key
                                        ? "bg-orange-100 text-orange-600"
                                        : "bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-5 space-y-2 pr-1 xl:flex-1 xl:overflow-y-auto">
                        {loadingConversations ? (
                            <div className="rounded-2xl bg-[#f7f8fb] px-4 py-6 text-center text-sm text-slate-500">
                                Loading conversations...
                            </div>
                        ) : null}

                        {!loadingConversations && filteredConversations.length === 0 ? (
                            <div className="rounded-2xl bg-[#f7f8fb] px-4 py-6 text-center text-sm text-slate-500">
                                No conversations match your search yet.
                            </div>
                        ) : null}

                        {filteredConversations.map((conversation) => {
                            const isActive = conversation.id === activeChatId;

                            return (
                                <button
                                    key={conversation.id}
                                    type="button"
                                    onClick={() => setActiveChatId(conversation.id)}
                                    className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                                        isActive
                                            ? "border-orange-200 bg-[#fff5ef] shadow-[0_12px_30px_rgba(249,115,22,0.12)]"
                                            : "border-transparent bg-transparent hover:border-slate-200 hover:bg-white"
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="relative shrink-0">
                                            <ChatAvatar conversation={conversation} />
                                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="truncate text-sm font-semibold text-slate-900">
                                                    {conversation.participant?.name || "Unknown user"}
                                                </p>
                                                <span className="shrink-0 text-[11px] text-orange-500">
                                                    {formatMessageTime(conversation.last_message_at)}
                                                </span>
                                            </div>
                                            <p className="mt-1 truncate text-sm text-slate-500">
                                                {getMessagePreview(conversation)}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <div className={`flex min-h-[26rem] flex-col overflow-hidden bg-white shadow-sm xl:min-h-0 ${panelRadiusClassName}`}>
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        {activeConversation ? (
                            <div className="flex min-w-0 items-center gap-3">
                                <ChatAvatar conversation={activeConversation} className="h-12 w-12" />
                                <div className="min-w-0">
                                    <p className="truncate text-lg font-semibold text-slate-900">
                                        {activeConversation.participant?.name}
                                    </p>
                                    <p className="truncate text-sm text-slate-500">
                                        {activeConversation.participant?.role === "professional"
                                            ? `${activeConversation.participant?.location || "Morocco"} - usually responds in chat`
                                            : "Client conversation"}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className="text-lg font-semibold text-slate-900">Choose a conversation</p>
                                <p className="text-sm text-slate-500">Your messages will appear here.</p>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_12%,#ffffff_100%)] px-4 py-5 sm:px-5 sm:py-6">
                        {error ? (
                            <div className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-500">
                                {error}
                            </div>
                        ) : null}

                        {loadingMessages && activeChatId ? (
                            <div className="text-center text-sm text-slate-500">Loading messages...</div>
                        ) : null}

                        {!loadingMessages && !activeChatId ? (
                            <div className="m-auto max-w-md pt-16 text-center text-sm text-slate-500">
                                Select a conversation from the left to view the full discussion.
                            </div>
                        ) : null}

                        {!loadingMessages && activeChatId && messages.length === 0 ? (
                            <div className="text-center text-sm text-slate-500">No messages yet in this conversation.</div>
                        ) : null}

                        <div className="space-y-5">
                            {messages.map((message, index) => {
                                const isSent = message.sender_id === user?.id;
                                const requestPayload = message.message_type === "request"
                                    ? parseRequestPayload(message.media_url)
                                    : null;
                                const previousMessage = messages[index - 1];
                                const showDayLabel = !previousMessage
                                    || formatMessageDay(previousMessage.created_at) !== formatMessageDay(message.created_at);

                                return (
                                    <div key={message.id}>
                                        {showDayLabel ? (
                                            <div className="mb-4 flex justify-center">
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-400">
                                                    {formatMessageDay(message.created_at)}
                                                </span>
                                            </div>
                                        ) : null}

                                        <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
                                            <div className={`flex max-w-full gap-3 sm:max-w-[85%] ${isSent ? "items-end" : "items-start"}`}>
                                                {!isSent ? (
                                                    <div className="pt-1">
                                                        <ChatAvatar conversation={activeConversation} className="h-8 w-8" textClassName="text-xs" />
                                                    </div>
                                                ) : null}

                                                <div className={isSent ? "text-right" : "text-left"}>
                                                    <div
                                                        className={`inline-block ${
                                                            message.message_type === "request" && requestPayload
                                                                ? ""
                                                                : `rounded-2xl px-5 py-3 text-sm leading-7 shadow-sm ${
                                                                    isSent
                                                                        ? "rounded-br-[10px] bg-gradient-to-r from-orange-500 to-[#db6b12] text-white"
                                                                        : "rounded-bl-[10px] bg-[#f8fafc] text-slate-700"
                                                                }`
                                                        }`}
                                                    >
                                                        {message.message_type === "request" && requestPayload ? (
                                                            <RequestMessageCard
                                                                payload={requestPayload}
                                                                canRespond={user?.role === "professional"}
                                                                isUpdating={updatingRequestId === requestPayload?.request_id}
                                                                onAccept={() => respondToRequest(requestPayload?.request_id, "En_Cour")}
                                                                onComplete={() => respondToRequest(requestPayload?.request_id, "Terminer")}
                                                                onReject={() => respondToRequest(requestPayload?.request_id, "Refuser")}
                                                            />
                                                        ) : (
                                                            message.message
                                                        )}
                                                    </div>
                                                    <p className="mt-1 text-[11px] text-slate-400">
                                                        {formatMessageTime(message.created_at)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="border-t border-slate-100 bg-white px-4 py-4 sm:px-5">
                        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-[#f8fafc] px-3 py-3 shadow-inner sm:gap-3 sm:rounded-full sm:px-4">
                            <input
                                type="text"
                                value={draft}
                                onChange={(event) => setDraft(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault();
                                        sendMessage();
                                    }
                                }}
                                disabled={!activeChatId || sending}
                                placeholder={activeChatId ? "Type a message..." : "Select a conversation first"}
                                className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
                            />
                            <button type="button" className="hidden h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-white hover:text-slate-700 sm:flex">
                                <FiSmile className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={sendMessage}
                                disabled={!activeChatId || !draft.trim() || sending}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
                            >
                                <FiSend className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <aside className={`flex min-h-0 flex-col overflow-hidden bg-white p-5 shadow-sm ${panelRadiusClassName}`}>
                    {activeConversation ? (
                        <>
                            <div className="text-center">
                                <div className="mx-auto w-fit rounded-full bg-[#f8fafc] p-2">
                                    <ChatAvatar conversation={activeConversation} className="h-20 w-20" textClassName="text-2xl" />
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                                    {activeConversation.participant?.name}
                                </h2>
                                <p className="mt-2 flex items-center justify-center gap-1 text-sm text-slate-500">
                                    <FiMapPin className="h-4 w-4" />
                                    {activeConversation.participant?.location || activeConversation.participant?.role || "Khidma"}
                                </p>
                                {activeConversation.participant?.profile_path ? (
                                    <Link
                                        to={activeConversation.participant.profile_path}
                                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#dfe8fb] px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#d4e0fb]"
                                    >
                                        View Profile
                                        <FiArrowUpRight className="h-4 w-4" />
                                    </Link>
                                ) : null}
                            </div>

                            <div className="mt-8 rounded-2xl bg-[#f8fafc] p-4">
                                <p className="text-sm font-semibold text-slate-900">Active Request</p>
                                {latestRequestPayload ? (
                                    <div className="mt-4 overflow-x-auto">
                                        <RequestMessageCard
                                            payload={latestRequestPayload}
                                            canRespond={user?.role === "professional"}
                                            isUpdating={updatingRequestId === latestRequestPayload?.request_id}
                                            onAccept={() => respondToRequest(latestRequestPayload?.request_id, "En_Cour")}
                                            onComplete={() => respondToRequest(latestRequestPayload?.request_id, "Terminer")}
                                            onReject={() => respondToRequest(latestRequestPayload?.request_id, "Refuser")}
                                        />
                                    </div>
                                ) : (
                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        No request card in this conversation yet. Once a client sends a service request, it will appear here.
                                    </p>
                                )}
                            </div>

                            <div className="mt-6 rounded-2xl bg-white">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-slate-900">Conversation Details</p>
                                    <span className="text-xs text-orange-500">Live</span>
                                </div>
                                <div className="mt-4 space-y-3 text-sm text-slate-500">
                                    <p>
                                        <span className="font-semibold text-slate-800">Role:</span> {activeConversation.participant?.role || "User"}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-slate-800">Last activity:</span> {formatMessageTime(activeConversation.last_message_at) || "Not available"}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-slate-800">Conversation id:</span> #{activeConversation.id}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="m-auto text-center text-sm text-slate-500">
                            Select a conversation to see profile and request details.
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}

