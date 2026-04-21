export default function Card({ request }) {
    return (
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-2">
                {
                    request.status === 'Nouveau' ? 
                        <span className="bg-[#fff0ea] text-[#ff7e5f] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                            New Request
                        </span> : 
                        (request.status === 'En_Cour' ? 
                            <span className="bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                                In Progress
                            </span> : 
                            <span className="bg-green-50 text-green-600 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                                Completed
                            </span>
                        )
                }

                <span className="text-gray-400 text-[9px] sm:text-[10px] font-medium">
                    2h ago
                </span>
            </div>

            {
                request.status !== 'Nouveau' ? 
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
                    </div> : 
                    ''
            }

            {
                request.status === 'Nouveau' ? 
                    <button className="w-full bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                        Cancel Request
                    </button> :
                    (request.status === 'En_Cour' ?
                        <button className="w-full bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                            Chat with Brahim
                        </button> :
                        <button className="w-full bg-[#fff0ea] text-[#ff7e5f] text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-[#ffe5dc] transition">
                            Leave a Review
                        </button>
                    )
            }
        </div>
    )
}