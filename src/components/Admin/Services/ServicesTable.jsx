import {
    FiLoader,
    FiSearch,
    FiTrash2,
} from "react-icons/fi";

function getFilterButtonClass(isActive) {
    return isActive
        ? "rounded-full bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#F97415]"
        : "rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600";
}

export default function ServicesTable({
    activeFilter,
    feedback,
    loading,
    pendingServiceId,
    removeService,
    searchQuery,
    services,
    setActiveFilter,
    setSearchQuery,
}) {
    return (
        <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                    <FiSearch className="h-4 w-4 shrink-0" />
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search by title, category, or professional..."
                        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </label>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setActiveFilter("all")}
                        className={getFilterButtonClass(activeFilter === "all")}
                    >
                        All services
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveFilter("published")}
                        className={getFilterButtonClass(activeFilter === "published")}
                    >
                        Published
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveFilter("flagged")}
                        className={getFilterButtonClass(activeFilter === "flagged")}
                    >
                        Flagged
                    </button>
                </div>
            </div>

            {feedback ? (
                <div
                    className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                        feedback.type === "success"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                >
                    {feedback.message}
                </div>
            ) : null}

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
                    {loading ? (
                        <div className="px-5 py-10 text-center text-sm text-slate-500">
                            Loading services...
                        </div>
                    ) : services.length > 0 ? (
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
                                    <button
                                        type="button"
                                        onClick={() => removeService(service.id)}
                                        disabled={pendingServiceId === service.id}
                                        title="Delete service"
                                        aria-label="Delete service"
                                        className="inline-flex items-center justify-center rounded-full bg-rose-50 p-2.5 text-rose-600 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {pendingServiceId === service.id ? (
                                            <FiLoader className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <FiTrash2 className="h-4 w-4" />
                                        )}
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
