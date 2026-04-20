import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "../../Landing/PopularServices/Cards";
import { services } from "../../../data/Services";

export default function PopularServices({ isDark }) {
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
                        Popular Services
                    </h2>

                    <p
                        className={`font-medium ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}
                    >
                        Get your home tasks handled by experts
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8 w-full">
                {services.map((service, index) => (
                    <Cards key={index} Service={service} isDark={isDark} />
                ))}
            </div>
        </section>
    )
}