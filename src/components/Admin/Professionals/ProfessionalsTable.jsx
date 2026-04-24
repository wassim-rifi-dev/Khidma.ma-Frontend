import { FiCheckCircle, FiEye, FiFilter, FiMapPin, FiSearch, FiSlash } from "react-icons/fi";

export default function ProfessionalsTable({ professionals }) {
    return (
        <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                    <FiSearch className="h-4 w-4 shrink-0" />
                    <span>Search by name, service, or city...</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button className="rounded-full bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#F97415]">
                        All professionals
                    </button>
                    <button className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600">
                        Verified
                    </button>
                    <button className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600">
                        Pending
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
                        <FiFilter className="h-4 w-4" />
                        Filters
                    </button>
                </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[20px] border border-slate-200">
                <div className="grid grid-cols-[1.15fr_1fr_0.8fr_0.8fr_0.9fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    <span>Professional</span>
                    <span>Specialty</span>
                    <span>City</span>
                    <span>Status</span>
                    <span>Joined</span>
                    <span>Actions</span>
                </div>

                <div className="divide-y divide-slate-200">
                    {professionals.length > 0 ? (
                        professionals.map((professional) => (
                            <div
                                key={professional.id || `${professional.name}-${professional.joined}`}
                                className="grid grid-cols-[1.15fr_1fr_0.8fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600"
                            >
                                <div>
                                    <p className="font-semibold text-slate-900">{professional.name}</p>
                                    <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${professional.availabilityTone}`}>
                                        {professional.availability}
                                    </span>
                                </div>
                                <span>{professional.specialty}</span>
                                <span className="flex items-center gap-1.5">
                                    <FiMapPin className="h-4 w-4 text-slate-400" />
                                    {professional.city}
                                </span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${professional.statusTone}`}>
                                    {professional.status}
                                </span>
                                <span>{professional.joined}</span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-[#F97415]">
                                        <FiEye className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-emerald-600">
                                        <FiCheckCircle className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-rose-500">
                                        <FiSlash className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-5 py-10 text-center text-sm text-slate-500">
                            No professionals found.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
