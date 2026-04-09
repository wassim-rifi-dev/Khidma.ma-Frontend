import { PiSealCheckBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

export default function Hero({isDark}) {
    return (
        <section className={`flex items-center justify-between py-16 px-2 md:px-6 lg:px-12 ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
        }`}>
            {/* Left Side */}
            <div className={`w-full lg:w-1/2 space-y-6`}>
                <div className="inline-flex items-center gap-2 bg-[rgba(249,116,21,0.1)] text-[#F97415] px-4 py-1.5 rounded-full text-sm font-bold">
                    <PiSealCheckBold size={20} />
                    Des professionnels locaux vérifiés à votre service
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
                    Trouvez les <br />
                    meilleurs <br />
                    <span className="text-[#F97415] block text-4xl md:text-7xl">professionnels</span>
                    près de chez <br />
                    vous
                </h1>
                <p className="text-[#475569] text-lg max-w-lg leading-relaxed">
                    Réservez des plombiers, électriciens, menuisiers et bien plus en quelques clics. La manière la plus simple de faire avancer vos projets au Maroc.
                </p>
                <div className="hidden md:flex items-center bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 max-w-2xl">
                    <div className="flex-1 flex items-center px-4 gap-3 border-r border-gray-200">
                        <IoSearch color="#94A3B8" size={24} />
                        <select className="bg-transparent w-full outline-none text-gray-700 font-medium cursor-pointer appearance-none">
                            <option selected disabled>Select Service</option>
                        </select>
                    </div>
                    <div className="flex-1 flex items-center px-4 gap-3">
                        <MdOutlineLocationOn color="#94A3B8" size={24} />
                        <select className="bg-transparent w-full outline-none text-gray-700 font-medium cursor-pointer appearance-none">
                            <option selected disabled>Select Service</option>
                        </select>
                    </div>
                    <button class="bg-[#FF781F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e66a1a] transition shadow-lg shadow-orange-200">
                        Find a Professional
                    </button>
                </div>
            </div>
            {/* Right Side */}
            {/* <div>
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" alt="Plambier" />
                <div>
                    <div>
                        <GoShieldCheck />
                    </div>
                    <div>
                        <p>100% Verified</p>
                        <p>Background-checked pros</p>
                    </div>
                </div>
            </div> */}
            <div class="w-full lg:w-1/2 relative">
                <div class="relative rounded-[40px] overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                        alt="Technician working" 
                        class="w-full h-125 object-cover"
                    />
                    <div class="absolute inset-0 bg-black/5"></div>
                </div>

                <div class="absolute bottom-10 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                    <div class="bg-[#FFF4ED] p-3 rounded-xl">
                        <GoShieldCheck color="#F97316" size={24} />
                    </div>
                    <div>
                        <p class="text-[#0F172A] font-bold text-sm">100% Verified</p>
                        <p class="text-[#64748B] text-xs font-medium">Background-checked pros</p>
                    </div>
                </div>
            </div>
        </section>
    )
}