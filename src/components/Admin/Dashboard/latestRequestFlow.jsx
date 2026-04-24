export default function LatestRequestFlow({ rows }) {
    return (
        <div className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Requests monitor</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">Latest request flow</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Recent activity</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-[22px] border border-slate-200">
                <div className="grid grid-cols-[1fr_1.2fr_1fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    <span>Request</span>
                    <span>Service</span>
                    <span>City</span>
                    <span>Status</span>
                </div>

                <div className="divide-y divide-slate-200">
                    {rows.length > 0 ? (
                        rows.map((row) => (
                            <div key={row.id} className="grid grid-cols-[1fr_1.2fr_1fr_auto] gap-3 px-5 py-4 text-sm text-slate-600">
                                <span className="font-semibold text-slate-900">{row.id}</span>
                                <span>{row.service}</span>
                                <span>{row.city}</span>
                                <span className={`rounded-full px-3 py-1 text-center text-xs font-semibold ${row.color}`}>
                                    {row.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="px-5 py-10 text-center text-sm text-slate-500">
                            No recent requests found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
