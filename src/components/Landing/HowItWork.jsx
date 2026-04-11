export default function HowItWork({isDark}) {
    return (
        <section class={`py-16 md:py-20 px-6 sm:px-8 lg:px-12 ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
        }`}>
            <div class="w-full mx-auto text-center">
                <div class="mb-14 md:mb-16">
                    <h2 class={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 ${
                        isDark ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                        How It Works
                    </h2>

                    <p class={`text-base md:text-lg max-w-2xl mx-auto ${
                        isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                    }`}>
                        Get expert help in three simple steps. We connect you with the best pros in your city.
                    </p>
                </div>

                <div class="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-6">

                    <div class="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

                    <div class="relative z-10 flex flex-col items-center flex-1 text-center group">

                        <div class="w-16 h-16 md:w-20 md:h-20 bg-[#F97415] text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 transition-transform group-hover:scale-110 duration-300">
                            1
                        </div>

                        <h3 class={`text-xl md:text-2xl font-bold mb-3 ${
                            isDark ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                            Search for a Service
                        </h3>

                        <p class={`leading-relaxed max-w-xs md:max-w-70 ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Pick the service you need and your city from our marketplace.
                        </p>
                    </div>

                    <div class="relative z-10 flex flex-col items-center flex-1 text-center group">

                        <div class={`w-16 h-16 md:w-20 md:h-20 text-[#F97415] border-3 border-[#F97415] rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 transition-transform group-hover:scale-110 duration-300 ${
                            isDark ? 'bg-[#1F2937]' : 'bg-white'
                        }`}>
                            2
                        </div>

                        <h3 class={`text-xl md:text-2xl font-bold mb-3 ${
                            isDark ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                            Compare Professionals
                        </h3>

                        <p class={`leading-relaxed max-w-xs md:max-w-70 ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Browse profiles, check ratings, and read authentic client reviews.
                        </p>
                    </div>

                    <div class="relative z-10 flex flex-col items-center flex-1 text-center group">

                        <div class="w-16 h-16 md:w-20 md:h-20 bg-[#F97415] text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 transition-transform group-hover:scale-110 duration-300">
                            3
                        </div>

                        <h3 class={`text-xl md:text-2xl font-bold mb-3 ${
                            isDark ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                            Book the Best
                        </h3>

                        <p class={`leading-relaxed max-w-xs md:max-w-70 ${
                            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>
                            Schedule a visit and get the job done by a verified professional.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}