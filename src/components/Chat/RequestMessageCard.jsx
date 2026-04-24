export default function RequestMessageCard({ payload }) {
    return (
        <div className="w-full min-w-[16rem] max-w-[22rem] rounded-[24px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-[#fff4ec] p-4 text-left shadow-[0_10px_30px_rgba(249,115,22,0.12)]">
            <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                    New Request
                </span>
                {payload?.status ? (
                    <span className="text-[11px] font-medium text-slate-400">
                        {payload.status}
                    </span>
                ) : null}
            </div>

            <h4 className="mt-3 text-sm font-semibold text-slate-900">
                {payload?.service_title || "Requested service"}
            </h4>

            <div className="mt-4 space-y-2 text-[12px] text-slate-600">
                {payload?.preferred_date ? (
                    <p>
                        <span className="font-semibold text-slate-800">Date:</span> {payload.preferred_date}
                    </p>
                ) : null}
                {payload?.preferred_time ? (
                    <p>
                        <span className="font-semibold text-slate-800">Time:</span> {payload.preferred_time}
                    </p>
                ) : null}
                {payload?.address ? (
                    <p>
                        <span className="font-semibold text-slate-800">Address:</span> {payload.address}
                    </p>
                ) : null}
                {payload?.price ? (
                    <p>
                        <span className="font-semibold text-slate-800">Budget:</span> {payload.price} {payload.currency || ""}
                    </p>
                ) : null}
            </div>

            {payload?.client_message ? (
                <div className="mt-4 rounded-2xl bg-white/80 px-3 py-3 text-[12px] leading-6 text-slate-600">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Client note
                    </p>
                    <p>{payload.client_message}</p>
                </div>
            ) : null}
        </div>
    );
}
