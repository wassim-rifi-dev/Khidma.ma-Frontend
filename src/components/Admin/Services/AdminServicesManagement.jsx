import {
    FiArchive,
    FiCheckCircle,
    FiEye,
    FiFilter,
    FiLayers,
    FiSearch,
    FiShield,
    FiTrash2,
} from "react-icons/fi";

const summaryCards = [
    { label: "Total services", value: "5,902" },
    { label: "Published", value: "5,614" },
    { label: "Flagged", value: "27" },
];

const services = [
    {
        title: "AC Repair at Home",
        category: "Electricity",
        professional: "Youssef Benali",
        status: "Published",
        updated: "Apr 22, 2026",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Deep Apartment Cleaning",
        category: "Cleaning",
        professional: "Salma Chraibi",
        status: "Pending",
        updated: "Apr 21, 2026",
        statusTone: "bg-amber-50 text-amber-600",
    },
    {
        title: "Bathroom Plumbing Fix",
        category: "Plumbing",
        professional: "Hamza El Fassi",
        status: "Published",
        updated: "Apr 20, 2026",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Interior Wall Painting",
        category: "Painting",
        professional: "Meryem Ait Ali",
        status: "Flagged",
        updated: "Apr 18, 2026",
        statusTone: "bg-rose-50 text-rose-600",
    },
];

export default function AdminServicesManagement() {
    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Services management</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Manage published services</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Static admin page for reviewing service cards, moderation state, and quick visibility actions.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiShield className="h-5 w-5 text-[#F97415]" />
                        <span>Admin-only workspace</span>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
                {summaryCards.map((card) => (
                    <article key={card.label} className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                                <p className="mt-3 text-3xl font-bold text-slate-950">{card.value}</p>
                            </div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                                <FiLayers className="h-5 w-5" />
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiSearch className="h-4 w-4 shrink-0" />
                        <span>Search by title, category, or professional...</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-full bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#F97415]">
                            All services
                        </button>
                        <button className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600">
                            Published
                        </button>
                        <button className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600">
                            Flagged
                        </button>
                        <button className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
                            <FiFilter className="h-4 w-4" />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[20px] border border-slate-200">
                    <div className="grid grid-cols-[1.2fr_0.9fr_1fr_0.8fr_0.9fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        <span>Service</span>
                        <span>Category</span>
                        <span>Professional</span>
                        <span>Status</span>
                        <span>Updated</span>
                        <span>Actions</span>
                    </div>

                    <div className="divide-y divide-slate-200">
                        {services.map((service) => (
                            <div
                                key={`${service.title}-${service.updated}`}
                                className="grid grid-cols-[1.2fr_0.9fr_1fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600"
                            >
                                <span className="font-semibold text-slate-900">{service.title}</span>
                                <span>{service.category}</span>
                                <span>{service.professional}</span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${service.statusTone}`}>
                                    {service.status}
                                </span>
                                <span>{service.updated}</span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-[#F97415]">
                                        <FiEye className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-emerald-600">
                                        <FiCheckCircle className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-amber-600">
                                        <FiArchive className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-rose-500">
                                        <FiTrash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
