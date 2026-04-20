export default function MyRequest() {
    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">

            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                {/* Images */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                    <div className="flex flex-col gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
                            alt="Electrician"
                            className="w-full h-40 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-sm"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                            alt="Cleaning"
                            className="w-full h-36 sm:h-48 lg:h-56 object-cover rounded-2xl shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            alt="Room"
                            className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-2xl shadow-sm"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc"
                            alt="Carpenter"
                            className="w-full h-44 sm:h-56 lg:h-72 object-cover rounded-2xl shadow-sm"
                        />
                    </div>

                </div>

                {/* Requests Card */}
                <div className="w-full sm:max-w-[420px] lg:max-w-[350px] bg-[#f8f9fa] rounded-[1.5rem] p-4 sm:p-5 shadow-sm border border-gray-100">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4 px-1">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                            My Requests
                        </h2>

                        <a
                            href="#"
                            className="text-[#ff7e5f] font-semibold text-xs sm:text-sm hover:underline"
                        >
                            See all
                        </a>
                    </div>

                    <div className="flex flex-col gap-3">

                        {/* Card 1 */}
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

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-50">
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-green-50 text-green-600 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                                    Completed
                                </span>

                                <span className="text-gray-400 text-[9px] sm:text-[10px] font-medium">
                                    Yesterday
                                </span>
                            </div>

                            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                                Living Room Painting
                            </h3>

                            <div className="flex items-center gap-1.5 mb-3">
                                <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                                    <img
                                        src="https://i.pravatar.cc/100?img=5"
                                        className="w-full h-full object-cover"
                                        alt="avatar"
                                    />
                                </div>

                                <span className="text-[11px] text-gray-600 font-medium">
                                    Laila M.
                                </span>
                            </div>

                            <button className="w-full bg-[#fff0ea] text-[#ff7e5f] text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-[#ffe5dc] transition">
                                Leave a Review
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-50">
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#fff0ea] text-[#ff7e5f] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                                    New Request
                                </span>

                                <span className="text-gray-400 text-[9px] sm:text-[10px] font-medium">
                                    3 days ago
                                </span>
                            </div>

                            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5">
                                Garden Lighting Setup
                            </h3>

                            <p className="text-gray-400 text-[10px] sm:text-xs mb-3">
                                Waiting for pro acceptance...
                            </p>

                            <button className="w-full bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                                Cancel Request
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}