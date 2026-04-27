import { FiCalendar } from "react-icons/fi";

export default function ServiceRecentRequests({ requests, hasRequests }) {
    return (
        <aside className="rounded-[28px] bg-white p-7 shadow-sm xl:self-start">
            <h2 className="text-xl font-bold text-slate-900">Recent requests</h2>

            {hasRequests ? (
                <div className="mt-5 space-y-4">
                    {requests.map((request) => (
                        <article key={request.id} className="rounded-2xl bg-slate-50 p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-slate-900">{request.client}</h3>
                                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                                        <FiCalendar className="h-3.5 w-3.5" />
                                        {request.date}
                                    </p>
                                </div>
                                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${request.statusClassName}`}>
                                    {request.status}
                                </span>
                            </div>
                            <div className="mt-4 flex items-center justify-between border-t border-white pt-3">
                                <span className="text-sm font-semibold text-slate-500">Value</span>
                                <span className="text-sm font-bold text-[#A34E0D]">{request.value}</span>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                    <p className="text-sm font-medium text-slate-500">No requests for this service yet.</p>
                </div>
            )}
        </aside>
    );
}
