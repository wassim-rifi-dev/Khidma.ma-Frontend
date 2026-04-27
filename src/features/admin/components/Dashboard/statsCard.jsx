export default function StatsCard({ label, summaryKey, summary, accent, icon: Icon }) {
    return (
        <div className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                        {summary?.[summaryKey] ?? 0}
                    </p>
                </div>

                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${accent} text-white`}>
                    <Icon className="h-5 w-5" />
                </span>
            </div>
        </div>
    );
}