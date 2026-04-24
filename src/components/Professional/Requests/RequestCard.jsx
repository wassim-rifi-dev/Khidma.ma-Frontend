import { FiCheckCircle, FiClock, FiInbox, FiMapPin, FiMessageCircle, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
    formatRequestDate,
    formatRequestPrice,
    getProfessionalRequestStatusConfig,
} from "../../../utils/Helpers/Request";

const statusIcons = {
    Completed: FiCheckCircle,
    "In Progress": FiClock,
    New: FiInbox,
};

export default function RequestCard({ request, isUpdating = false, onCompleteRequest = null }) {
    const status = getProfessionalRequestStatusConfig(request.status);
    const StatusIcon = statusIcons[status.label] || FiInbox;
    const canComplete = request.status === "En_Cour" && typeof onCompleteRequest === "function";

    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 transition hover:border-orange-100 hover:bg-white hover:shadow-sm xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
                    <FiUser className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-base font-bold text-slate-950">{request.service?.title || "Service request"}</h3>
                        <span className="text-xs font-semibold text-slate-400">#{request.id}</span>
                    </div>

                    <p className="mt-1 text-sm font-medium text-slate-600">
                        {request.client?.first_name} {request.client?.last_name}
                    </p>
                    <p className="mt-2 line-clamp-1 text-sm text-slate-400">{request.message || "No message provided."}</p>
                </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:w-[460px] xl:items-center">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <FiMapPin className="h-4 w-4 text-slate-400" />
                    <span>{request.address || request.service?.city || "Location not set"}</span>
                </div>

                <div className="text-sm font-semibold text-slate-500">{formatRequestDate(request.created_at)}</div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">
                    <span className="text-base font-bold text-slate-950">{formatRequestPrice(request.price)}</span>
                    <span className={`flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${status.className}`}>
                        <StatusIcon className="h-3.5 w-3.5" />
                        {status.label}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row xl:w-auto">
                {canComplete ? (
                    <button
                        type="button"
                        onClick={() => onCompleteRequest(request.id)}
                        disabled={isUpdating}
                        className="flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <FiCheckCircle className="h-4 w-4" />
                        {isUpdating ? "Updating..." : "Completed"}
                    </button>
                ) : null}

                <Link
                    to={`/professional/requests/${request.id}`}
                    className="flex h-10 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-[#ff781f] hover:text-white xl:w-auto"
                >
                    <FiMessageCircle className="h-4 w-4" />
                    Details
                </Link>
            </div>
        </article>
    );
}
