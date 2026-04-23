import { FiCheckCircle, FiClipboard, FiClock, FiStar } from "react-icons/fi";

const icons = {
    requests: FiClipboard,
    completed: FiCheckCircle,
    rating: FiStar,
    response: FiClock,
};

export default function AnalyticsStats({ stats }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, trend, trendStyle, iconKey, iconStyle }) => {
                const Icon = icons[iconKey];

                return (
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
            )})}
        </div>
    );
}
