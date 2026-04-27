import { MdOutlineArrowOutward } from "react-icons/md";

export default function BecomeAProfessional() {
    return (
        <section className="py-12 md:py-16 px-6 sm:px-8 lg:px-12">
            <div className="w-full mx-auto">
                <div className="relative flex min-h-105 w-full items-center overflow-hidden rounded-2xl bg-[#162032] shadow-[0_30px_70px_rgba(15,23,42,0.2)]">
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
                            className="inline-flex items-center gap-2 rounded-2xl bg-[#FF781F] px-6 py-3 font-bold text-white shadow-[0_8px_25px_rgba(255,120,31,0.35)] transition-all duration-300 hover:bg-[#e66a1a] hover:shadow-[0_12px_30px_rgba(255,120,31,0.5)] group md:px-8 md:py-4"
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
