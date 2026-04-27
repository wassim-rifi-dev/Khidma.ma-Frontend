import { FiMapPin } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";

export default function WhyChooseKhidma({ isDark }) {
    return (
        <section className={`py-16 md:py-20 px-6 sm:px-8 lg:px-12 ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
        }`}>
            <div className="w-full mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 ${
                        isDark ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                        Why Choose Khidma.ma
                    </h2>

                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${
                        isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                    }`}>
                        We are committed to quality, trust, and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <div className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isDark ? 'bg-[#1F2937] border-[#334155]' : 'bg-[#F8F7F5] border-[#E2E8F0]'
                    }`}>
                        <div className="w-14 h-14 bg-[rgba(34,197,94,0.1)] text-[#22C55E] rounded-2xl flex items-center justify-center mb-6">
                            <GoShieldCheck size={30} />
                        </div>

                        <h3 className={`text-xl font-bold mb-3 ${
                            isDark ? 'text-[#F8FAFC]' : 'text-[#0F172A]'
                        }`}>Verified Pros</h3>

                        <p className={`text-sm leading-relaxed ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Every professional undergoes a background check and identity verification.
                        </p>
                    </div>

                    <div className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isDark ? 'bg-[#1F2937] border-[#334155]' : 'bg-[#F8F7F5] border-[#E2E8F0]'
                    }`}>
                        <div className="w-14 h-14 bg-[rgba(249,116,21,0.1)] text-[#F97415] rounded-2xl flex items-center justify-center mb-6">
                            <HiOutlineLightningBolt size={30} />
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-3 ${
                            isDark ? 'text-[#F8FAFC]' : 'text-[#0F172A]'
                        }`}>Fast Booking</h3>

                        <p className={`text-sm leading-relaxed ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Book a service in under 2 minutes with our streamlined platform.
                        </p>
                    </div>

                    <div className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isDark ? 'bg-[#1F2937] border-[#334155]' : 'bg-[#F8F7F5] border-[#E2E8F0]'
                    }`}>
                        <div className="w-14 h-14 bg-[rgba(59,130,246,0.1)] text-[#3B82F6] rounded-2xl flex items-center justify-center mb-6">
                            <MdEditNote size={30} />
                        </div>

                        <h3 className={`text-xl font-bold mb-3 ${
                            isDark ? 'text-[#F8FAFC]' : 'text-[#0F172A]'
                        }`}>Transparent Reviews</h3>

                        <p className={`text-sm leading-relaxed ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Real reviews from real customers ensure you get the best service quality.
                        </p>
                    </div>

                    <div className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isDark ? 'bg-[#1F2937] border-[#334155]' : 'bg-[#F8F7F5] border-[#E2E8F0]'
                    }`}>
                        <div className="w-14 h-14 bg-[rgba(147,51,234,0.1)] text-[#9333EA] rounded-2xl flex items-center justify-center mb-6">
                            <FiMapPin size={24} />
                        </div>

                        <h3 className={`text-xl font-bold mb-3 ${
                            isDark ? 'text-[#F8FAFC]' : 'text-[#0F172A]'
                        }`}>Local Experts</h3>

                        <p className={`text-sm leading-relaxed ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Find experts right in your neighborhood for immediate assistance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
