import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "./PopularServices/Cards";

export default function PopularServices() {
    return (
        <section
            className={`flex flex-col items-center justify-center py-16 px-12 bg-[#F8F7F5] gap-y-14`}
        >
            <div 
                className={`w-full flex justify-between items-end`}
            >
                <div>
                    <h2 
                        className="text-3xl font-extrabold text-[#1E293B] mb-2 tracking-tight"
                    >
                        Popular Services
                    </h2>
                    <p className="text-slate-500 font-medium">Get your home tasks handled by experts</p>
                </div>
                <a 
                    href="#" 
                    className={`flex items-center gap-2 text-[#F97415] font-bold hover:text-[#fa6f0c] transition-colors group text-[18px]`}
                >
                    View all services
                    <FaArrowRightLong size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
            <div className="grid grid-cols-6 gap-8">
                <Cards />
            </div>
        </section>
    )
}