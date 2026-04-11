export default function HowItWork() {
    return (
        <section class="py-20 px-6 bg-white">
            <div class="max-w-7xl mx-auto text-center">
                <div class="mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">How It Works</h2>
                    <p class="text-[#64748B] text-lg max-w-2xl mx-auto">
                        Get expert help in three simple steps. We connect you with the best pros in your city.
                    </p>
                </div>

                <div class="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-6">
                    <div class="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

                    <div class="relative z-10 flex flex-col items-center flex-1 text-center group">
                        <div class="w-20 h-20 bg-[#F97415] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl shadow-orange-200 mb-8 transition-transform group-hover:scale-110 duration-300">
                            1
                        </div>

                        <h3 class="text-2xl font-bold text-[#0F172A] mb-3">Search for a Service</h3>

                        <p class="text-[#64748B] leading-relaxed max-w-70">
                            Pick the service you need and your city from our marketplace.
                        </p>
                    </div>

                    <div class="relative z-10 flex flex-col items-center flex-1 text-center group">
                        <div class="w-20 h-20 bg-white text-[#F97415] border-4 border-[#F97415] rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-8 transition-transform group-hover:scale-110 duration-300">
                            2
                        </div>

                        <h3 class="text-2xl font-bold text-[#0F172A] mb-3">Compare Professionals</h3>

                        <p class="text-[#64748B] leading-relaxed max-w-70">
                            Browse profiles, check ratings, and read authentic client reviews.
                        </p>
                    </div>

                    <div class="relative z-10 flex flex-col items-center flex-1 text-center group">
                        <div class="w-20 h-20 bg-[#F97415] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl shadow-orange-200 mb-8 transition-transform group-hover:scale-110 duration-300">
                            3
                        </div>

                        <h3 class="text-2xl font-bold text-[#0F172A] mb-3">Book the Best</h3>

                        <p class="text-[#64748B] leading-relaxed max-w-70">
                            Schedule a visit and get the job done by a verified professional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}