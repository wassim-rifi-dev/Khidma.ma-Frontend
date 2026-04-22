import { FiArrowUpRight, FiDroplet, FiHome, FiPlus, FiTool } from "react-icons/fi";

const services = [
    {
        title: "Emergency Plumbing",
        description: "24/7 rapid response for burst pipes, severe blockages, and water damage",
        tag: "Urgent Repair",
        price: "From 300 MAD",
        icon: FiHome,
        iconStyle: "bg-orange-100 text-orange-500",
    },
    {
        title: "Leak Detection",
        description: "Advanced thermal and acoustic leak detection for hidden pipe issues...",
        tag: "Diagnostic",
        price: "From 200 MAD",
        icon: FiDroplet,
        iconStyle: "bg-sky-100 text-sky-500",
    },
    {
        title: "Fixture Installation",
        description: "Professional installation of sinks, toilets, showers, and water filtration...",
        tag: "Installation",
        price: "Hourly Rate",
        icon: FiTool,
        iconStyle: "bg-slate-100 text-slate-500",
    },
];

export default function MyServicesSection() {
    return (
        <section className="mx-auto mt-8 w-full max-w-6xl">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">My Services</h2>
                <p className="mt-1 text-base text-slate-500">Manage your offerings and pricing.</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
                <div className="grid gap-6 md:grid-cols-2">
                    {services.map(({ title, description, tag, price, icon: Icon, iconStyle }) => (
                        <article
                            key={title}
                            className="rounded-[22px] border border-slate-100 bg-white p-6 shadow-sm"
                        >
                            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${iconStyle}`}>
                                <Icon className="h-5 w-5" />
                            </span>

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                            <p className="mt-2 min-h-12 text-base leading-6 text-slate-500">{description}</p>

                            <div className="mt-5 border-t border-slate-100 pt-4">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
                                        {tag}
                                    </span>
                                    <span className="text-base font-bold text-[#A34E0D]">{price}</span>
                                </div>
                            </div>
                        </article>
                    ))}

                    <button
                        type="button"
                        className="flex min-h-[205px] flex-col items-center justify-center rounded-[22px] border border-dashed border-slate-200 bg-white/40 p-6 text-center transition hover:border-orange-200 hover:bg-orange-50/40"
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#A34E0D] shadow-sm">
                            <FiPlus className="h-6 w-6" />
                        </span>
                        <span className="mt-5 text-lg font-semibold text-slate-900">Create New Service</span>
                        <span className="mt-1 text-sm font-medium text-slate-500">Add a new offering to your catalog</span>
                    </button>
                </div>

                <aside className="rounded-[30px] bg-[#252a2b] p-7 text-white shadow-[0_22px_55px_rgba(15,23,42,0.18)] xl:self-start">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-orange-300">
                        <FiArrowUpRight className="h-5 w-5" />
                    </span>

                    <h3 className="mt-6 text-2xl font-semibold">Get More Clients</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                        Profiles with a portfolio gallery receive 40% more booking requests. Add photos of your recent work.
                    </p>

                    <button
                        type="button"
                        className="mt-7 w-full rounded-full bg-orange-300 px-6 py-3.5 text-base font-semibold text-[#4a2a13] transition hover:bg-orange-400"
                    >
                        Improve Profile
                    </button>
                </aside>
            </div>
        </section>
    );
}
