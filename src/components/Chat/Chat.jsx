export default function Chat({ isOpen }) {
    const conversations = [
        {
            name: "Ahmed Benali",
            sub: "Typing...",
            subColor: "text-orange-500",
            img: "https://i.pravatar.cc/48?img=12",
            active: true,
            online: true,
        },
        {
            name: "Sara Alami",
            sub: "The quote is ready for your...",
            subColor: "text-gray-400",
            img: "https://i.pravatar.cc/48?img=5",
            active: false,
            online: false,
        },
    ];

    const messages = [
        {
            id: 1,
            type: "received",
            text: "Hello! I can definitely help with that pipe leak. When would you like me to come over for an inspection?",
            time: "10:42 AM",
        },
        {
            id: 2,
            type: "sent",
            text: "Hi Ahmed, tomorrow morning around 10 AM works best for me. Does that work for you?",
            time: "10:45 AM",
        },
        {
            id: 3,
            type: "received",
            text: "Tomorrow at 10 AM is perfect. Please send me your location pin.",
            time: "10:46 AM",
        },
    ];

    return (
        <div
            className={`fixed bottom-18 right-12 z-50 rounded-2xl shadow-[0_28px_80px_rgba(15,23,42,0.28)] ${
                isOpen ? "block" : "hidden"
            }`}
        >
            <div className="flex h-120 w-170 overflow-hidden rounded-2xl bg-white">
                <div className="flex w-[182px] flex-col bg-[#f4f5f7]">
                    <div className="px-4 py-5">
                        <h2 className="text-[14px] font-bold text-[#252525]">
                            Messages
                        </h2>
                    </div>

                    <div className="flex flex-col py-1">
                        {conversations.map((conversation) => (
                            <div
                                key={conversation.name}
                                className={`flex cursor-pointer items-center gap-3 px-4 py-4 transition-colors ${
                                    conversation.active
                                        ? "bg-white shadow-[inset_4px_0_0_#ff7a00]"
                                        : "hover:bg-white/70"
                                }`}
                            >
                                <div className="relative shrink-0">
                                    <img
                                        src={conversation.img}
                                        alt={conversation.name}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    {conversation.online && (
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                                    )}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-[13px] font-semibold leading-none text-[#2d2d2d]">
                                        {conversation.name}
                                    </p>
                                    <p className={`mt-1 truncate text-[12px] ${conversation.subColor}`}>
                                        {conversation.sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 flex-col bg-[#fffdfa]">
                    <div className="flex items-center justify-between px-4 py-3.5">
                        <div className="flex items-center gap-3">
                            <div className="relative shrink-0">
                                <img
                                    src={conversations[0].img}
                                    alt="Ahmed Benali"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[13px] font-semibold text-[#2f2f2f]">
                                    Ahmed Benali
                                </span>
                                <span className="text-[12px] text-[#c2b9ae]">&bull;</span>
                                <span className="text-[12px] font-medium text-green-500">
                                    Online
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-[#6f6259] transition hover:bg-[#f6efe8]"
                            aria-label="Conversation options"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex max-w-[79%] flex-col ${
                                    message.type === "sent" ? "self-end items-end" : "items-start"
                                }`}
                            >
                                <div
                                    className={`rounded-[22px] px-4 py-3 ${
                                        message.type === "sent"
                                            ? "rounded-tr-[8px] bg-orange-500 text-white"
                                            : "rounded-tl-[8px] bg-[#f1f2f4] text-[#333333]"
                                    }`}
                                >
                                    <p className="text-[12px] leading-5">{message.text}</p>
                                    <span
                                        className={`mt-2 block text-[10px] ${
                                            message.type === "sent" ? "text-orange-100" : "text-[#9d9d9d]"
                                        }`}
                                    >
                                        {message.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-4 py-4">
                        <div className="flex items-center gap-3 rounded-full bg-[#f1f2f4] px-3 py-2.5">
                            <button
                                type="button"
                                className="flex h-8 w-8 items-center justify-center rounded-full text-[#6f6259] transition hover:bg-white"
                                aria-label="Attach file"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.79 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
                                </svg>
                            </button>

                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 bg-transparent text-[12px] text-[#7b8190] outline-none placeholder:text-[#8e95a3]"
                            />

                            <button
                                type="button"
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600"
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
