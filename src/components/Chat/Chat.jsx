import ChatAvatar from "./ChatAvatar";
import RequestMessageCard from "./RequestMessageCard";
import { formatMessageTime, getMessagePreview, parseRequestPayload } from "./chatUtils";
import useChatInterface from "../../hooks/useChatInterface";

export default function Chat({ isOpen }) {
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
    } = useChatInterface(isOpen);

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
                                            <ChatAvatar conversation={conversation} />
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
                                    <ChatAvatar conversation={activeConversation} />
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
                                            <RequestMessageCard
                                                payload={requestPayload}
                                                canRespond={user?.role === "professional"}
                                                isUpdating={updatingRequestId === requestPayload?.request_id}
                                                onAccept={() => respondToRequest(requestPayload?.request_id, "En_Cour")}
                                                onComplete={() => respondToRequest(requestPayload?.request_id, "Terminer")}
                                                onReject={() => respondToRequest(requestPayload?.request_id, "Refuser")}
                                            />
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
                                        sendMessage();
                                    }
                                }}
                                disabled={!activeChatId || sending}
                                placeholder={activeChatId ? "Type your message..." : "Select a conversation first"}
                                className="flex-1 bg-transparent text-[12px] text-[#4b5563] outline-none placeholder:text-[#8e95a3] disabled:cursor-not-allowed"
                            />

                            <button
                                type="button"
                                onClick={sendMessage}
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
