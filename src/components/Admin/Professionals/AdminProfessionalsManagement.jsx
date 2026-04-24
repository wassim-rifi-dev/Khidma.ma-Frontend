import {
    FiCheckCircle,
    FiEye,
    FiFilter,
    FiMapPin,
    FiSearch,
    FiShield,
    FiSlash,
    FiTool,
} from "react-icons/fi";
import useAdminProfessionals from "../../../hooks/admin/useAdminProfessionals";

const professionals = [
    {
        name: "Youssef Benali",
        specialty: "Electrician",
        city: "Rabat",
        status: "Verified",
        availability: "Available",
        joined: "Apr 20, 2026",
        statusTone: "bg-emerald-50 text-emerald-600",
        availabilityTone: "bg-sky-50 text-sky-600",
    },
    {
        name: "Salma Chraibi",
        specialty: "Home Cleaning",
        city: "Casablanca",
        status: "Pending",
        availability: "Reviewing",
        joined: "Apr 22, 2026",
        statusTone: "bg-amber-50 text-amber-600",
        availabilityTone: "bg-slate-100 text-slate-600",
    },
    {
        name: "Hamza El Fassi",
        specialty: "Plumbing",
        city: "Tangier",
        status: "Verified",
        availability: "Busy",
        joined: "Apr 18, 2026",
        statusTone: "bg-emerald-50 text-emerald-600",
        availabilityTone: "bg-orange-50 text-[#F97415]",
    },
    {
        name: "Meryem Ait Ali",
        specialty: "Painting",
        city: "Marrakech",
        status: "Suspended",
        availability: "Unavailable",
        joined: "Apr 16, 2026",
        statusTone: "bg-rose-50 text-rose-600",
        availabilityTone: "bg-slate-100 text-slate-600",
    },
];

export default function AdminProfessionalsManagement() {
    const { summaryCards } = useAdminProfessionals();

    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Professionals management</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Manage professional accounts</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Static admin page for checking professional profiles, verification states, and quick moderation actions.
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
                                <FiTool className="h-5 w-5" />
                            </span>
                        </div>
                    </article>
                ))}
            </section>

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
                        {professionals.map((professional) => (
                            <div
                                key={`${professional.name}-${professional.joined}`}
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
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
