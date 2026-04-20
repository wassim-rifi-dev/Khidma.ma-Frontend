export default function Card() {
    return (
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-2">
                <span className="bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                    In Progress
                </span>

                <span className="text-gray-400 text-[9px] sm:text-[10px] font-medium">
                    2h ago
                </span>
            </div>

            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                Kitchen Sink Repair
            </h3>

            <div className="flex items-center gap-1.5 mb-3">
                <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                    <img
                        src="https://i.pravatar.cc/100?img=11"
                        className="w-full h-full object-cover"
                        alt="avatar"
                    />
                </div>

                <span className="text-[11px] text-gray-600 font-medium">
                    Brahim T.
                </span>
            </div>

            <button className="w-full bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                Chat with Brahim
            </button>
        </div>
    )
}