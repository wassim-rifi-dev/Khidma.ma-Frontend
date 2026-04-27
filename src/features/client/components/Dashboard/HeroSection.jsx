import ServiceSearchBar from "../Shared/ServiceSearchBar";

export default function Hero() {
    return (
        <div className="flex items-center justify-center min-h-[90vh] bg-white px-4 sm:px-6 md:px-10 py-10 font-sans">
            <div className="relative flex items-center justify-center w-full min-h-[75vh] bg-[#F8FAFC] rounded-xl md:rounded-2xl px-5 sm:px-8 md:px-12 py-10 text-center overflow-hidden border border-gray-100/50 shadow-sm">

                <div className="absolute top-[-10%] right-[-5%] w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#FAE8E0] blur-[100px] rounded-full opacity-60"></div>

                <div className="absolute bottom-[-10%] left-[-5%] w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#E0F2FE] blur-[100px] rounded-full opacity-60"></div>

                <div className="relative z-10 w-full">
                    <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-[#111827] leading-tight tracking-tight">
                        Find trusted professionals
                    </h1>

                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-[#FF7A1A] leading-tight">
                        near you
                    </h2>

                    <p className="text-[#64748B] text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium">
                        The fastest way to hire expert artisans in Morocco. From home repairs to digital services.
                    </p>

                    <div className="mt-10 md:mt-12 relative z-30">
                        <div className="sticky top-22 md:top-20">
                            <div className="mx-auto w-full max-w-3xl">
                                <ServiceSearchBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
