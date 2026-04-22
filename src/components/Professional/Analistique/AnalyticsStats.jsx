import { FiCheckCircle, FiClipboard, FiClock, FiStar } from "react-icons/fi";

const stats = [
    {
        label: "Total Requests",
        value: "124",
        trend: "+12%",
        trendStyle: "bg-emerald-50 text-emerald-600",
        icon: FiClipboard,
        iconStyle: "bg-sky-100 text-sky-700",
    },
    {
        label: "Completed Jobs",
        value: "98",
        trend: "+8%",
        trendStyle: "bg-emerald-50 text-emerald-600",
        icon: FiCheckCircle,
        iconStyle: "bg-orange-100 text-orange-700",
    },
    {
        label: "Average Rating",
        value: "4.9",
        trend: "0%",
        trendStyle: "bg-slate-100 text-slate-500",
        icon: FiStar,
        iconStyle: "bg-slate-200 text-slate-700",
    },
    {
        label: "Response Rate",
        value: "95%",
        trend: "-2%",
        trendStyle: "bg-red-50 text-red-500",
        icon: FiClock,
        iconStyle: "bg-emerald-100 text-emerald-700",
    },
];

export default function AnalyticsStats() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, trend, trendStyle, icon: Icon, iconStyle }) => (
                <article key={label} className="rounded-[28px] bg-white p-7 shadow-sm">
                    <div className="mb-6 flex items-start justify-between">
                        <span className={`flex h-12 w-12 items-center justify-center rounded-full ${iconStyle}`}>
                            <Icon className="h-6 w-6" />
                        </span>
                        <span className={`rounded-full px-3 py-1 text-sm font-bold ${trendStyle}`}>{trend}</span>
                    </div>

                    <p className="text-base font-medium text-stone-600">{label}</p>
                    <p className="mt-2 text-4xl font-bold tracking-wide text-slate-950">{value}</p>
                </article>
            ))}
        </div>
    );
}
