import {
    FiActivity,
    FiBarChart2,
    FiBriefcase,
    FiClipboard,
    FiTrendingUp,
    FiUsers,
} from "react-icons/fi";

const summaryCards = [
    { label: "Monthly visits", value: "24.8K", icon: FiActivity },
    { label: "New users", value: "1,248", icon: FiUsers },
    { label: "Completed requests", value: "842", icon: FiClipboard },
    { label: "Active services", value: "5,614", icon: FiBriefcase },
];

const monthlyBars = [
    { label: "Jan", value: 38 },
    { label: "Feb", value: 48 },
    { label: "Mar", value: 56 },
    { label: "Apr", value: 72 },
    { label: "May", value: 64 },
    { label: "Jun", value: 79 },
];

const topCategories = [
    { name: "Cleaning", value: "32%" },
    { name: "Electricity", value: "25%" },
    { name: "Plumbing", value: "18%" },
    { name: "Painting", value: "11%" },
];

const quickInsights = [
    "Cleaning remains the most requested category this month.",
    "Professional registrations are growing faster than client registrations.",
    "Completed requests increased compared to the previous period.",
];

export default function AdminAnalytics() {
    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Analytics overview</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Platform analytics</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Static analytics page to visualize growth, service activity, and platform performance at a glance.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiBarChart2 className="h-5 w-5 text-[#F97415]" />
                        <span>Static analytics mockup</span>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map(({ label, value, icon: Icon }) => (
                    <article key={label} className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{label}</p>
                                <p className="mt-3 text-3xl font-bold text-slate-950">{value}</p>
                            </div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                                <Icon className="h-5 w-5" />
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Growth</p>
                            <h3 className="mt-2 text-xl font-semibold text-slate-900">Monthly activity</h3>
                        </div>
                        <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                            <FiTrendingUp className="h-3.5 w-3.5" />
                            +12.4%
                        </span>
                    </div>

                    <div className="mt-8 flex h-72 items-end justify-between gap-4 rounded-[20px] bg-slate-50 px-5 pb-5 pt-8">
                        {monthlyBars.map((item) => (
                            <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                                <div className="flex h-[180px] w-full items-end rounded-full bg-orange-100/70">
                                    <div
                                        className="w-full rounded-full bg-gradient-to-t from-orange-500 to-amber-300"
                                        style={{ height: `${item.value}%` }}
                                    />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Category share</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">Top categories</h3>
                    </div>

                    <div className="mt-6 space-y-4">
                        {topCategories.map((category) => (
                            <div key={category.name}>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-semibold text-slate-900">{category.name}</span>
                                    <span className="text-slate-500">{category.value}</span>
                                </div>
                                <div className="h-3 rounded-full bg-slate-100">
                                    <div
                                        className="h-3 rounded-full bg-[#F97415]"
                                        style={{ width: category.value }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Performance summary</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">Key highlights</h3>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[18px] bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Average completion rate</p>
                            <p className="mt-2 text-3xl font-bold text-slate-950">91%</p>
                        </div>
                        <div className="rounded-[18px] bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Average review score</p>
                            <p className="mt-2 text-3xl font-bold text-slate-950">4.8</p>
                        </div>
                        <div className="rounded-[18px] bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Response time</p>
                            <p className="mt-2 text-3xl font-bold text-slate-950">18m</p>
                        </div>
                        <div className="rounded-[18px] bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Resolved reports</p>
                            <p className="mt-2 text-3xl font-bold text-slate-950">76%</p>
                        </div>
                    </div>
                </article>

                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Quick insights</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">What stands out</h3>
                    </div>

                    <div className="mt-6 space-y-3">
                        {quickInsights.map((insight) => (
                            <div key={insight} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                                {insight}
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </div>
    );
}
