import {
    FiChevronRight,
    FiClock,
    FiMapPin,
    FiShield,
    FiStar,
} from "react-icons/fi";

export default function Main() {
    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[#dfe8fb] px-3 py-1 text-slate-600">
                        Plumbing
                    </span>
                    <FiChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-slate-400">Casablanca</span>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                    Expert Plumbing & Leak Repair
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                        <FiStar className="h-4 w-4 fill-orange-400 text-orange-400" />
                        <span>
                            <strong className="font-semibold text-slate-900">4.9</strong>{" "}
                            <span className="text-slate-400">(120+ reviews)</span>
                        </span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                        <FiMapPin className="h-4 w-4" />
                        Casablanca, Morocco
                    </span>
                </div>

                <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                            alt="Plumbing Service"
                            className="h-[300px] w-full rounded-[32px] object-cover shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:h-[360px]"
                        />
                    </div>

                    <aside className="self-start rounded-[32px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                        <div className="text-center">
                            <p className="text-sm text-slate-400">Estimated Price</p>
                            <p className="mt-2 text-[2rem] font-semibold leading-none text-slate-900">
                                150 - 500 MAD
                            </p>
                        </div>

                        <button className="mt-7 w-full rounded-full bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600">
                            Request Service
                        </button>

                        <div className="mt-8 space-y-4 border-t border-slate-100 pt-6 text-sm text-slate-500">
                            <div className="flex items-center gap-3">
                                <FiShield className="h-4 w-4 text-orange-500" />
                                <span>Verified Professional</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiClock className="h-4 w-4 text-orange-500" />
                                <span>Quick Response</span>
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="mt-8 grid gap-6 xl:max-w-[calc(100%-304px)]">
                    <section className="rounded-[30px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            About this service
                        </h2>
                        <p className="mt-5 max-w-4xl text-sm leading-8 text-slate-500">
                            Professional plumbing services for all your household needs.
                            Whether it&apos;s a minor leak, a major pipe burst, or
                            installing new fixtures, we provide quick, reliable, and
                            high-quality repairs to ensure your home runs smoothly.
                        </p>
                    </section>

                    <section className="rounded-[30px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                        <div className="flex items-start gap-4">
                            <img
                                src="https://i.pravatar.cc/120?img=12"
                                alt="Ahmed M."
                                className="h-16 w-16 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Ahmed M.
                                </h3>
                                <p className="mt-1 text-sm font-medium text-orange-500">
                                    Certified Plumber
                                </p>
                                <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-500">
                                    With over 10 years of experience in residential and
                                    commercial plumbing across Casablanca. Specialized in
                                    complex leak detection and modern fixture installations.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
