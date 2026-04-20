export default function Hero() {
    return (
        <div className="flex items-center justify-center min-h-[90vh] bg-white px-4 sm:px-6 md:px-10 py-10 font-sans">

            <div className="relative flex items-center justify-center w-full min-h-[75vh] bg-[#F8FAFC] 
            rounded-[30px] md:rounded-[48px] px-5 sm:px-8 md:px-12 py-10 text-center overflow-hidden 
            border border-gray-100/50 shadow-sm">

                {/* Background blur */}
                <div className="absolute top-[-10%] right-[-5%] w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#FAE8E0] blur-[100px] rounded-full opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#E0F2FE] blur-[100px] rounded-full opacity-60"></div>

                <div className="relative z-10 w-full">

                    {/* Title */}
                    <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-[#111827] leading-tight tracking-tight">
                        Find trusted professionals
                    </h1>

                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-[#FF7A1A] leading-tight">
                        near you
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[#64748B] text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium">
                        The fastest way to hire expert artisans in Morocco. From home repairs to digital services.
                    </p>

                    {/* Search */}
                    <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-stretch md:items-center bg-white 
                    p-2 sm:p-3 rounded-[24px] md:rounded-[28px] 
                    shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] 
                    w-full max-w-3xl mx-auto border border-gray-50 gap-2 md:gap-0">

                        {/* Service */}
                        <div className="flex items-center flex-1 px-4 sm:px-5 md:border-r border-gray-100 group">
                            <svg className="w-5 h-5 text-gray-400 mr-3 group-hover:text-[#FF7A1A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                            </svg>

                            <input
                                type="text"
                                placeholder="What service do you need?"
                                className="w-full py-3 sm:py-4 text-sm sm:text-[15px] outline-none text-[#1E293B] placeholder-[#94A3B8] bg-transparent"
                            />
                        </div>

                        {/* Location */}
                        <div className="flex items-center flex-1 px-4 sm:px-5 group">
                            <svg className="w-5 h-5 text-gray-400 mr-3 group-hover:text-[#FF7A1A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>

                            <input
                                type="text"
                                placeholder="Casablanca"
                                className="w-full py-3 sm:py-4 text-sm sm:text-[15px] font-semibold outline-none text-[#475569] bg-transparent"
                            />
                        </div>

                        {/* Button */}
                        <button className="bg-[#FF7A1A] hover:bg-[#E66900] text-white font-bold 
                        py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-[16px] md:rounded-[20px] 
                        transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                            Search
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}