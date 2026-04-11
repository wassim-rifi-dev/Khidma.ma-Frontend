import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Cards() {
    return (
        <div class="bg-white rounded-2xl shadow-md w-[320px] overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                alt="Electric work"
                class="w-full h-50 object-cover"
            />

            <div class="p-5 space-y-3">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-lg font-semibold text-[#0F172A">
                            Ahmed Mansouri
                        </h2>
                        
                        <p class="text-[#F97316] font-medium text-sm">
                            Expert Electrician
                        </p>
                    </div>

                    <div class="flex items-center gap-1 text-sm text-[#0F172A] bg-[#F8FAFC] p-1 rounded-md">
                        <FaRegStar color="#EAB308" /> <span>4.9</span>
                    </div>
                </div>

                <div class="flex items-center gap-2 text-gray-500 text-sm">
                    <IoLocationOutline color="#94A3B8" />
                    Casablanca, Morocco
                </div>

                <button class="w-full mt-4 bg-[#F8FAFC] hover:bg-[#ecefef] text-[#334155] font-bold py-3 rounded-xl transition border border-[#F1F5F9]">
                    View Profile
                </button>
            </div>
        </div>
    )
}