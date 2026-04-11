import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Cards({ isDark }) {
    return (
        <div className={`rounded-2xl shadow-md w-[320px] overflow-hidden border-2 ${
            isDark
                    ? 'bg-[#1F2937] border-[#334155]'
                    : 'bg-white border-[#F1F5F9]'
        }`}>
            <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                alt="Electric work"
                class="w-full h-50 object-cover"
            />

            <div class="p-5 space-y-3">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 className={`text-lg font-semibold ${
                            isDark ? 'text-[#F8FAFC]' : 'text-[#0F172A]'
                        }`}>
                            Ahmed Mansouri
                        </h2>
                        
                        <p class="text-[#F97316] font-medium text-sm">
                            Expert Electrician
                        </p>
                    </div>

                    <div className={`flex items-center gap-1 text-sm p-1 rounded-md ${
                        isDark ? 'text-[#F8FAFC] bg-[#1E293B]' : 'text-[#0F172A] bg-[#F8FAFC]'
                    }`}>
                        <FaRegStar color="#EAB308" /> <span>4.9</span>
                    </div>
                </div>

                <div class="flex items-center gap-2 text-[#94A3B8] text-sm">
                    <IoLocationOutline color="#94A3B8" />
                    Casablanca, Morocco
                </div>

                <button className={`w-full mt-4 font-bold py-3 rounded-xl transition border ${
                    isDark ? 'bg-[#1E293B] hover:bg-[#1f2836] border-[#334155] text-[#CBD5F5]' : 'bg-[#F8FAFC] hover:bg-[#ecefef] text-[#334155] border-[#F1F5F9]'
                }`}>
                    View Profile
                </button>
            </div>
        </div>
    )
}