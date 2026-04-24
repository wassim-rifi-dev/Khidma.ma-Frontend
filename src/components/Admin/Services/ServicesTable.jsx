import {
    FiArchive,
    FiCheckCircle,
    FiEye,
    FiFilter,
    FiSearch,
    FiTrash2,
} from "react-icons/fi";

export default function ServicesTable({ services }) {
    return (
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
                    {services.length > 0 ? (
                        services.map((service) => (
                            <div
                                key={service.id || `${service.title}-${service.updated}`}
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
                        ))
                    ) : (
                        <div className="px-5 py-10 text-center text-sm text-slate-500">
                            No services found.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
