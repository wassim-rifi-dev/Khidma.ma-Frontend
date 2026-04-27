import { FiArrowUpRight } from "react-icons/fi";
import useAdminDashboard from "../../hooks/useAdminDashboard";
import { statCardsConfig } from "../../../../shared/constants/admin/adminDashboardStats";
import StatsCard from "./statsCard";
import LatestRequestFlow from "./latestRequestFlow";

const moderationItems = [
    { title: "Review reported for abusive language", meta: "Service #2841", tone: "bg-rose-50 text-rose-600" },
    { title: "Professional profile waiting approval", meta: "Electrician in Rabat", tone: "bg-amber-50 text-amber-600" },
    { title: "Client dispute on completed request", meta: "Request #9008", tone: "bg-sky-50 text-sky-600" },
];

export default function AdminDashboard() {
    const { summary, latestRequestRows } = useAdminDashboard();

    return (
        <div className="space-y-8">
            <section className="rounded-[26px] bg-white p-8 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Admin overview</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Simple dashboard mockup</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                                A light static admin screen with the main platform numbers, recent requests, and moderation notes.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:w-[320px]">
                        <div className="rounded-[22px] bg-orange-50 px-5 py-4">
                            <p className="text-sm font-medium text-slate-500">Health score</p>
                            <p className="mt-2 text-3xl font-bold text-slate-950">94%</p>
                        </div>
                        <div className="rounded-[22px] bg-slate-50 px-5 py-4">
                            <p className="text-sm font-medium text-slate-500">Open reports</p>
                            <p className="mt-2 text-3xl font-bold text-slate-950">19</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
                {statCardsConfig.map(({key : summaryKey , label , accent, icon: Icon }) => (
                    <StatsCard label={label} key={summaryKey} summaryKey={summaryKey} accent={accent} summary={summary} icon={Icon} />
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <LatestRequestFlow rows={latestRequestRows} />

                <div className="grid gap-6">
                    <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Moderation queue</p>
                                <h3 className="mt-2 text-xl font-semibold text-slate-900">Needs attention</h3>
                            </div>
                            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">3 items</span>
                        </div>

                        <div className="mt-6 space-y-3">
                            {moderationItems.map((item) => (
                                <article key={item.title} className="rounded-[18px] border border-slate-200 p-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                                            <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.tone}`}>Open</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </article>

                    <article className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Quick actions</p>
                                <h3 className="mt-2 text-xl font-semibold text-slate-900">Shortcuts</h3>
                            </div>
                            <FiArrowUpRight className="h-5 w-5 text-[#F97415]" />
                        </div>

                        <div className="mt-6 grid gap-3">
                            <button className="flex items-center justify-between rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-orange-200 hover:bg-orange-50">
                                <span>
                                    <span className="block text-sm font-semibold text-slate-900">Review pending professionals</span>
                                    <span className="mt-1 block text-sm text-slate-500">18 profiles waiting validation</span>
                                </span>
                                <FiArrowUpRight className="h-5 w-5 text-slate-400" />
                            </button>

                            <button className="flex items-center justify-between rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-orange-200 hover:bg-orange-50">
                                <span>
                                    <span className="block text-sm font-semibold text-slate-900">Check service moderation</span>
                                    <span className="mt-1 block text-sm text-slate-500">7 new flagged service cards</span>
                                </span>
                                <FiArrowUpRight className="h-5 w-5 text-slate-400" />
                            </button>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
