import {
    FiBookmark,
    FiEdit2,
    FiFilter,
    FiFolderPlus,
    FiLayers,
    FiSearch,
    FiShield,
    FiTrash2,
} from "react-icons/fi";

const summaryCards = [
    { label: "Total categories", value: "14" },
    { label: "Most used", value: "Cleaning" },
    { label: "New this month", value: "2" },
];

const categories = [
    {
        name: "Cleaning",
        services: "842 services",
        professionals: "216 professionals",
        status: "Active",
        updated: "Apr 22, 2026",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
    {
        name: "Electricity",
        services: "690 services",
        professionals: "178 professionals",
        status: "Active",
        updated: "Apr 21, 2026",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
    {
        name: "Painting",
        services: "354 services",
        professionals: "97 professionals",
        status: "Review",
        updated: "Apr 19, 2026",
        statusTone: "bg-amber-50 text-amber-600",
    },
    {
        name: "Garden Care",
        services: "128 services",
        professionals: "34 professionals",
        status: "Hidden",
        updated: "Apr 17, 2026",
        statusTone: "bg-slate-100 text-slate-600",
    },
];

export default function AdminCategoriesManagement() {
    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Categories management</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Manage service categories</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Static admin page for organizing categories, checking usage, and previewing quick maintenance actions.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 rounded-full bg-[#F97415] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,116,21,0.2)] transition hover:bg-orange-600">
                        <FiFolderPlus className="h-4 w-4" />
                        Add category
                    </button>
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
                        <span>Search categories...</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                            <FiShield className="h-5 w-5 text-[#F97415]" />
                            <span>Admin-only workspace</span>
                        </div>
                        <button className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
                            <FiFilter className="h-4 w-4" />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[20px] border border-slate-200">
                    <div className="grid grid-cols-[1fr_1fr_1fr_0.8fr_0.9fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        <span>Category</span>
                        <span>Services</span>
                        <span>Professionals</span>
                        <span>Status</span>
                        <span>Updated</span>
                        <span>Actions</span>
                    </div>

                    <div className="divide-y divide-slate-200">
                        {categories.map((category) => (
                            <div
                                key={`${category.name}-${category.updated}`}
                                className="grid grid-cols-[1fr_1fr_1fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                                        <FiBookmark className="h-4 w-4" />
                                    </span>
                                    <span className="font-semibold text-slate-900">{category.name}</span>
                                </div>
                                <span>{category.services}</span>
                                <span>{category.professionals}</span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${category.statusTone}`}>
                                    {category.status}
                                </span>
                                <span>{category.updated}</span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-[#F97415]">
                                        <FiEdit2 className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-amber-600">
                                        <FiLayers className="h-4 w-4" />
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
