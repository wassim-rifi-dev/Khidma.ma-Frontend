import { GoShieldCheck } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";

export default function WhyChooseKhidma() {
    return (
        <section class="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
            <div class="w-full mx-auto">
                <div class="text-center mb-16">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-[#0F172A]}`}>
                        Why Choose Khidma.ma
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto text-[#64748B]`}>
                        We are committed to quality, trust, and speed.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <div class="bg-[#F8F7F5] p-8 rounded-4xl hover:shadow-lg transition-shadow duration-300 border border-[#F1F5F9]">
                        <div class="w-14 h-14 bg-[rgba(34,197,94,0.1)] text-[#22C55E] rounded-2xl flex items-center justify-center mb-6">
                            <GoShieldCheck size={30} />
                        </div>

                        <h3 class="text-xl font-bold text-[#0F172A] mb-3">Verified Pros</h3>

                        <p class="text-[#64748B] text-sm leading-relaxed">
                            Every professional undergoes a background check and identity verification.
                        </p>
                    </div>

                    <div class="bg-[#F8F7F5] p-8 rounded-4xl hover:shadow-lg transition-shadow duration-300 border border-[#F1F5F9]">
                        <div class="w-14 h-14 bg-[rgba(249,116,21,0.1)] text-[#F97415] rounded-2xl flex items-center justify-center mb-6">
                            <HiOutlineLightningBolt size={30} />
                        </div>
                        
                        <h3 class="text-xl font-bold text-[#0F172A] mb-3">Fast Booking</h3>

                        <p class="text-[#64748B] text-sm leading-relaxed">
                            Book a service in under 2 minutes with our streamlined platform.
                        </p>
                    </div>

                    <div class="bg-[#F8F7F5] p-8 rounded-4xl hover:shadow-lg transition-shadow duration-300 border border-[#F1F5F9]">
                        <div class="w-14 h-14 bg-[rgba(59,130,246,0.1)] text-[#3B82F6] rounded-2xl flex items-center justify-center mb-6">
                            <MdEditNote size={30} />
                        </div>

                        <h3 class="text-xl font-bold text-[#0F172A] mb-3">Transparent Reviews</h3>

                        <p class="text-[#64748B] text-sm leading-relaxed">
                            Real reviews from real customers ensure you get the best service quality.
                        </p>
                    </div>

                    <div class="bg-[#F8F7F5] p-8 rounded-4xl hover:shadow-lg transition-shadow duration-300 border border-[#F1F5F9]">
                        <div class="w-14 h-14 bg-[rgba(147,51,234,0.1)] text-[#9333EA] rounded-2xl flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>

                        <h3 class="text-xl font-bold text-[#0F172A] mb-3">Local Experts</h3>

                        <p class="text-[#64748B] text-sm leading-relaxed">
                            Find experts right in your neighborhood for immediate assistance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}