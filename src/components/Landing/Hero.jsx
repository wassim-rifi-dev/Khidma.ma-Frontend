import { PiSealCheckBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

export default function Hero({isDark}) {
    return (
        <section
            className={`flex flex-col lg:flex-row items-center justify-between py-10 lg:py-16 px-4 md:px-6 lg:px-12 ${
                isDark ? "bg-[#0F172A]" : "bg-white"
            }`}
        >
            {/* Left Side */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 bg-[rgba(249,116,21,0.1)] text-[#F97415] px-4 py-2 rounded-full text-xs md:text-sm font-bold w-fit">
                    <PiSealCheckBold size={18} className="md:w-5 md:h-5" />
                    Des professionnels locaux vérifiés à votre service
                </div>

                <h1
                    className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${
                        isDark ? "text-white" : "text-[#0F172A]"
                    }`}
                >
                    Trouvez les <br className="hidden md:block" />
                    meilleurs <br className="hidden md:block" />
                    <span className="text-[#F97415] block text-5xl md:text-6xl lg:text-7xl mt-1 md:mt-2">
                        professionnels
                    </span>
                    près de chez <br className="hidden md:block" />
                    vous
                </h1>

                <p className="text-[#475569] text-base md:text-lg max-w-lg leading-relaxed">
                    Réservez des plombiers, électriciens, menuisiers et bien plus en quelques
                    clics. La manière la plus simple de faire avancer vos projets au Maroc.
                </p>

                <div
                    className={`flex flex-col md:flex-row items-stretch md:items-center border shadow-xl md:shadow-2xl rounded-2xl p-2 max-w-2xl gap-2 md:gap-0 ${
                        isDark ? "bg-[#1F2937] border-[#334155]" : "bg-white border-gray-100"
                    }`}
                >
                    <div
                        className={`flex-1 flex items-center px-4 py-3 md:py-0 gap-3 md:border-r rounded-xl md:rounded-none ${
                        isDark 
                            ? "border-[#334155] bg-[#374151] md:bg-transparent" 
                            : "border-gray-200 bg-gray-50 md:bg-transparent"
                        }`}
                    >
                        <IoSearch color="#94A3B8" size={22} />
                        <select
                            defaultValue=""
                            className={`bg-transparent w-full outline-none font-medium cursor-pointer appearance-none ${
                                isDark ? "text-[#9CA3AF]" : "text-[#334155]"
                            }`}
                        >
                            <option value="" disabled>
                                Select Service
                            </option>
                        </select>
                    </div>

                    <div 
                        className={`flex-1 flex items-center px-4 py-3 md:py-0 gap-3 rounded-xl md:rounded-none ${
                        isDark 
                            ? "bg-[#374151] md:bg-transparent" 
                            : "bg-gray-50 md:bg-transparent"
                        }`}
                    >
                        <MdOutlineLocationOn color="#94A3B8" size={22} />
                        <select
                            defaultValue=""
                            className={`bg-transparent w-full outline-none font-medium cursor-pointer appearance-none ${
                                isDark ? "text-[#9CA3AF]" : "text-[#334155]"
                            }`}
                        >
                            <option value="" disabled>
                                Select Location
                            </option>
                        </select>
                    </div>

                    <button className="bg-[#FF781F] text-white px-8 py-3.5 md:py-4 mt-1 md:mt-0 rounded-xl font-bold hover:bg-[#e66a1a] transition w-full md:w-auto shrink-0">
                        Find a Professional
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:block w-full lg:w-1/2 relative mt-10 lg:mt-0 pl-10">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000"
                        alt="Technician working"
                        className="w-full h-125 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                </div>

                <div
                    className={`absolute bottom-10 -left-6 p-4 rounded-2xl shadow-xl border flex items-center gap-4 animate-bounce-slow ${
                        isDark ? "bg-[#1F2937] border-[#334155]" : "bg-white border-gray-50"
                    }`}
                >
                    <div className="bg-[rgba(249,115,22,0.2)] p-3 rounded-xl">
                        <GoShieldCheck color="#F97316" size={24} />
                    </div>

                    <div>
                        <p
                            className={`font-semibold text-sm ${
                                isDark ? "text-white" : "text-[#0F172A]"
                            }`}
                        >
                            100% Verified
                        </p>
                        <p className="text-[#94A3B8] text-xs font-medium">
                            Background-checked pros
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}