export default function ServiceSearchBar() {
    return (
        <div className="flex w-full max-w-3xl flex-col items-stretch gap-2 rounded-2xl border border-slate-200/80 bg-white/95 p-2.5 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.22)] backdrop-blur-sm md:flex-row md:items-center md:gap-0 md:p-3">
            <div className="group flex flex-1 items-center rounded-xl px-4 sm:px-5 md:border-r md:border-gray-100 md:rounded-none">
                <svg className="mr-3 h-5 w-5 text-gray-400 transition-colors group-hover:text-[#FF7A1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>

                <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full bg-transparent py-3 text-sm text-[#1E293B] outline-none placeholder-[#94A3B8] sm:py-4 sm:text-[15px]"
                />
            </div>

            <div className="group flex flex-1 items-center rounded-xl px-4 sm:px-5 md:rounded-none">
                <svg className="mr-3 h-5 w-5 text-gray-400 transition-colors group-hover:text-[#FF7A1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <input
                    type="text"
                    placeholder="Casablanca"
                    className="w-full bg-transparent py-3 text-sm font-semibold text-[#475569] outline-none sm:py-4 sm:text-[15px]"
                />
            </div>

            <button className="rounded-2xl bg-[#FF7A1A] px-6 py-3 font-bold text-white shadow-[0_12px_30px_rgba(255,122,26,0.22)] transition-all duration-300 hover:bg-[#E66900] hover:shadow-[0_16px_34px_rgba(230,105,0,0.28)] active:scale-95 sm:px-8 sm:py-4 md:px-10">
                Search
            </button>
        </div>
    );
}

