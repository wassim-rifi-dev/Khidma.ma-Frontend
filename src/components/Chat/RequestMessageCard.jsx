import { FiCalendar, FiCheck, FiClock, FiMapPin, FiX } from "react-icons/fi";
import { getRequestStatusMeta } from "./chatUtils";

export default function RequestMessageCard({
    payload,
    canRespond = false,
    isUpdating = false,
    onAccept = null,
    onReject = null,
}) {
    const statusMeta = getRequestStatusMeta(payload?.status);
    const showActions = canRespond && payload?.status === "Nouveau";

    return (
        <div className={`w-full min-w-[16rem] max-w-[23rem] rounded-[24px] border bg-gradient-to-br from-white via-white to-[#fff7f0] p-4 text-left shadow-[0_10px_30px_rgba(249,115,22,0.12)] ${statusMeta.borderClassName}`}>
            <div className="flex items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${statusMeta.badgeClassName}`}>
                    {statusMeta.label}
                </span>
                {payload?.price ? (
                    <span className="text-[11px] font-semibold text-slate-500">
                        {payload.price} {payload.currency || ""}
                    </span>
                ) : null}
            </div>

            <h4 className="mt-3 text-sm font-semibold text-slate-900">
                {payload?.service_title || "Requested service"}
            </h4>

            <div className="mt-4 grid gap-2 text-[12px] text-slate-600">
                {payload?.preferred_date ? (
                    <div className="flex items-center gap-2">
                        <FiCalendar className="h-3.5 w-3.5 text-orange-500" />
                        <p><span className="font-semibold text-slate-800">Date:</span> {payload.preferred_date}</p>
                    </div>
                ) : null}
                {payload?.preferred_time ? (
                    <div className="flex items-center gap-2">
                        <FiClock className="h-3.5 w-3.5 text-orange-500" />
                        <p><span className="font-semibold text-slate-800">Time:</span> {payload.preferred_time}</p>
                    </div>
                ) : null}
                {payload?.address ? (
                    <div className="flex items-start gap-2">
                        <FiMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" />
                        <p><span className="font-semibold text-slate-800">Address:</span> {payload.address}</p>
                    </div>
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

            {showActions ? (
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        onClick={onAccept}
                        disabled={isUpdating}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-3 py-2.5 text-[12px] font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
                    >
                        <FiCheck className="h-3.5 w-3.5" />
                        {isUpdating ? "Saving..." : "Accept"}
                    </button>
                    <button
                        type="button"
                        onClick={onReject}
                        disabled={isUpdating}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <FiX className="h-3.5 w-3.5" />
                        Refuse
                    </button>
                </div>
            ) : null}
        </div>
    );
}
