import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "./FeaturedProfessionals/Cards";

export default function FeaturedProfessionals({ isDark }) {
    return (
        <section
            className={`flex flex-col items-center justify-center py-16 px-6 md:px-10 lg:px-12 gap-y-14 ${
                isDark ? 'bg-[#1E293B]' : 'bg-[#F8F7F5]'
            }`}
        >
            <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                <div>
                    <h2
                        className={`text-2xl md:text-3xl font-extrabold mb-2 tracking-tight ${
                            isDark ? 'text-white' : 'text-[#1E293B]'
                        }`}
                    >
                        Featured Professionals
                    </h2>

                    <p
                        className={`font-medium ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}
                    >
                        Top performers with high satisfaction ratings
                    </p>
                </div>

                <a
                    href="#"
                    className="flex items-center gap-2 text-[#F97415] font-bold hover:text-[#fa6f0c] transition-colors group text-[18px]"
                >
                    View all professional
                    <FaArrowRightLong
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full">
                <Cards isDark={isDark} />
                <Cards isDark={isDark} />
                <Cards isDark={isDark} />
                <Cards isDark={isDark} />
            </div>
        </section>
    )
}