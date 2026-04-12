import { MdOutlineArrowOutward } from "react-icons/md";

export default function BecomeAProfessional() {
    return (
        <section className="py-12 md:py-16 px-6 sm:px-8 lg:px-12">
            <div className="w-full mx-auto">
                <div className="relative w-full rounded-4xl overflow-hidden bg-[#162032] shadow-2xl flex items-center min-h-105">
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=1600"
                            alt="Professional tools"
                            className="absolute inset-0 w-full h-full object-cover object-right opacity-30 mix-blend-luminosity"
                        />

                        <div className="absolute inset-0 bg-linear-to-r from-[#162032] via-[#162032]/90 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-xl lg:max-w-2xl">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Are You a <br />
                            Professional? Join <br />
                            Khidma.ma Today
                        </h2>

                        <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
                            Get more clients and grow your business with our platform.
                            We connect you with local customers looking for your expertise.
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-[#FF781F] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-[#e66a1a] transition-all duration-300 shadow-[0_8px_25px_rgba(255,120,31,0.35)] hover:shadow-[0_12px_30px_rgba(255,120,31,0.5)] group"
                        >
                            Become a Professional
                            <MdOutlineArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}