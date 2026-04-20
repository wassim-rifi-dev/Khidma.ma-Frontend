export default function Hero() {
    return (
        <div class="flex items-center justify-center min-h-[90vh] bg-white p-6 font-sans">

            <div class="relative flex items-center justify-center w-full min-h-[75vh] bg-[#F8FAFC] rounded-[48px] px-8 py-10 text-center overflow-hidden border border-gray-100/50 shadow-sm">

                <div class="absolute top-[-10%] right-[-5%] w-75 h-75 bg-[#FAE8E0] blur-[100px] rounded-full opacity-60"></div>
                <div class="absolute bottom-[-10%] left-[-5%] w-75 h-75 bg-[#E0F2FE] blur-[100px] rounded-full opacity-60"></div>

                <div class="relative z-10">
                    <h1 class="text-[42px] md:text-[56px] font-extrabold text-[#111827] leading-tight tracking-tight">
                        Find trusted professionals
                    </h1>
                    <h2 class="text-[42px] md:text-[56px] font-extrabold text-[#FF7A1A] leading-tight -mt-1.25">
                        near you
                    </h2>

                    <p class="text-[#64748B] text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium">
                        The fastest way to hire expert artisans in Morocco. From home repairs to digital services.
                    </p>

                    <div class="mt-12 inline-flex items-center bg-white p-2.5 rounded-[28px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] w-full max-w-3xl border border-gray-50">

                        <div class="flex items-center flex-1 px-5 border-r border-gray-100 group">
                            <svg class="w-5 h-5 text-gray-400 mr-3 group-hover:text-[#FF7A1A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="What service do you need?"
                                class="w-full py-4 text-[15px] outline-none text-[#1E293B] placeholder-[#94A3B8] bg-transparent"
                            />
                        </div>

                        <div class="flex items-center flex-1 px-5 group">
                            <svg class="w-5 h-5 text-gray-400 mr-3 group-hover:text-[#FF7A1A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <input
                                type="text"
                                placeholder="Casablanca"
                                class="w-full py-4 text-[15px] font-semibold outline-none text-[#475569] bg-transparent"
                            />
                        </div>

                        <button class="bg-[#FF7A1A] hover:bg-[#E66900] text-white font-bold py-4 px-10 rounded-[20px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}