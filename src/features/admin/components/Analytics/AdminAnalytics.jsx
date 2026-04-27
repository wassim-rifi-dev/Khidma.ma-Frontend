import {
    FiActivity,
    FiBarChart2,
    FiBriefcase,
    FiClipboard,
    FiTrendingUp,
    FiUsers,
} from "react-icons/fi";
import useAdminAnalytics from "../../hooks/useAdminAnalytics";
import { getAnalyticsBarHeight } from "../../../../shared/utils/Helpers/admin/Analytics";

const summaryIcons = [FiUsers, FiActivity, FiClipboard, FiBriefcase];

export default function AdminAnalytics() {
    const { analytics, loading, error } = useAdminAnalytics();
    const monthlyLabels = analytics?.monthly_activity?.labels ?? [];
    const monthlyRequests = analytics?.monthly_activity?.requests ?? [];
    const monthlyCompleted = analytics?.monthly_activity?.completed ?? [];
    const trend = analytics?.monthly_activity?.trend ?? "0%";
    const maxMonthlyValue = Math.max(...monthlyRequests, ...monthlyCompleted, 0);

    if (loading) {
        return (
            <div className="rounded-[22px] bg-white p-8 text-sm text-slate-500 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                Loading analytics...
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-[22px] border border-rose-200 bg-rose-50 p-8 text-sm text-rose-600 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Analytics overview</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Platform analytics</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Live admin analytics connected to the database to monitor growth, service demand, and platform health.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiBarChart2 className="h-5 w-5 text-[#F97415]" />
                        <span>Live database metrics</span>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {analytics.summary_cards.map(({ label, value }, index) => {
                    const Icon = summaryIcons[index] || FiActivity;

                    return (
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
                    );
                })}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Growth</p>
                            <h3 className="mt-2 text-xl font-semibold text-slate-900">Monthly request activity</h3>
                        </div>
                        <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                            <FiTrendingUp className="h-3.5 w-3.5" />
                            {trend}
                        </span>
                    </div>

                    <div className="mt-8 flex h-72 items-end justify-between gap-4 rounded-[20px] bg-slate-50 px-5 pb-5 pt-8">
                        {monthlyLabels.map((label, index) => (
                            <div key={label} className="flex flex-1 flex-col items-center gap-3">
                                <div className="flex h-[180px] w-full items-end gap-1 rounded-[22px] bg-orange-50/70 px-1">
                                    <div
                                        className="w-1/2 rounded-full bg-gradient-to-t from-orange-500 to-amber-300"
                                        style={{ height: getAnalyticsBarHeight(monthlyRequests[index] ?? 0, maxMonthlyValue) }}
                                    />
                                    <div
                                        className="w-1/2 rounded-full bg-gradient-to-t from-sky-700 to-sky-300"
                                        style={{ height: getAnalyticsBarHeight(monthlyCompleted[index] ?? 0, maxMonthlyValue) }}
                                    />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                            Requests
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-sky-600" />
                            Completed
                        </span>
                    </div>
                </article>

                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Category share</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">Top categories</h3>
                    </div>

                    <div className="mt-6 space-y-4">
                        {analytics.top_categories.length > 0 ? (
                            analytics.top_categories.map((category) => (
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
                            ))
                        ) : (
                            <div className="rounded-[18px] bg-slate-50 px-4 py-5 text-sm text-slate-500">
                                No category activity available yet.
                            </div>
                        )}
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
                        {analytics.performance_summary.map((item) => (
                            <div key={item.label} className="rounded-[18px] bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">{item.label}</p>
                                <p className="mt-2 text-3xl font-bold text-slate-950">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Quick insights</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">What stands out</h3>
                    </div>

                    <div className="mt-6 space-y-3">
                        {analytics.quick_insights.length > 0 ? (
                            analytics.quick_insights.map((insight) => (
                                <div key={insight} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                                    {insight}
                                </div>
                            ))
                        ) : (
                            <div className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                                Not enough platform activity yet to generate insights.
                            </div>
                        )}
                    </div>
                </article>
            </section>
        </div>
    );
}
