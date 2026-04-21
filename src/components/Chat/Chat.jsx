export default function Chat({ isOpen }) {
    return (
        <div className={`fixed bottom-6 right-6 w-105 h-120 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex z-50 ${
            isOpen ? 
                'block' : 'hidden'
        }`}>

            {/* Sidebar */}
            <div className="w-48 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Messages</h2>
                </div>

                <div className="flex flex-col">
                    {[
                        { name: "Ahmed Benali", sub: "Typing...", subColor: "text-orange-500", img: "https://i.pravatar.cc/40?img=12", active: true },
                        { name: "Sara Alami", sub: "The quote is ready for your...", subColor: "text-gray-400", img: "https://i.pravatar.cc/40?img=5", active: false },
                    ].map((c) => (
                        <div
                            key={c.name}
                            className={`flex items-center gap-3 px-3 py-3 cursor-pointer ${c.active ? "bg-gray-100" : "hover:bg-gray-50"}`}
                        >
                            <div className="relative shrink-0">
                                <img src={c.img} className="w-9 h-9 rounded-full object-cover" />
                                {c.active && (
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                                )}
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate">
                                    {c.name}
                                </p>
                                <p className={`text-xs truncate ${c.subColor}`}>
                                    {c.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">Ahmed Benali</span>
                        <span className="flex items-center gap-1 text-xs text-green-500 font-medium">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Online
                        </span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">

                    {/* Received */}
                    <div className="flex flex-col items-start max-w-[75%]">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                            <p className="text-sm text-gray-800">
                                Hello! I can definitely help with that pipe leak. When would you like me to come over for an inspection?
                            </p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 ml-1">10:42 AM</span>
                    </div>

                    {/* Sent */}
                    <div className="flex flex-col items-end max-w-[75%] self-end">
                        <div className="bg-orange-500 rounded-2xl rounded-tr-sm px-4 py-3">
                            <p className="text-sm text-white">
                                Hi Ahmed, tomorrow morning around 10 AM works best for me. Does that work for you?
                            </p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 mr-1">10:45 AM</span>
                    </div>

                    {/* Received */}
                    <div className="flex flex-col items-start max-w-[75%]">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                            <p className="text-sm text-gray-800">
                                Tomorrow at 10 AM is perfect. Please send me your location pin.
                            </p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 ml-1">10:46 AM</span>
                    </div>

                </div>

                {/* Input */}
                <div className="px-4 py-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-2.5">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 bg-transparent text-sm text-gray-500 outline-none"
                        />

                        <button className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}