import { useState } from "react";
import { FiTool } from "react-icons/fi";
import RecentRequestsMessage from "./RecentRequestsMessage";
import * as requestHelpers from "../../../../../../shared/utils/Helpers/Request"
import useClientRequest from "../../../../hooks/useClientRequest";
import ReviewRequestModal from "../../../Shared/ReviewRequestModal";

export default function RecentRequestsCard() {
    const { six_requests, isLoading } = useClientRequest();
    const [selectedRequest, setSelectedRequest] = useState(null);

    return (
        <>
        <section className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
            <h2 className="mb-5 text-lg font-semibold text-slate-900">Recent Requests</h2>

            {isLoading ? (
                <RecentRequestsMessage message="Loading recent requests..." />
            ) : six_requests.length === 0 ? (
                <RecentRequestsMessage
                    message="No recent requests yet"
                    description="Your latest service requests will appear here once you create one."
                />
            ) : (
                <div className="space-y-3">
                    {six_requests.map((request) => {
                        const statusMeta = requestHelpers.getStatusConfig(request.status);
                        const title = request.service?.title || "Service request";
                        const subtitle = request.message || "No additional details";

                        return (
                            <div
                                key={request.id}
                                className="flex flex-col gap-3 rounded-[22px] bg-[#f5f5f3] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
                                        <FiTool className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">{title}</p>
                                        <p className="text-xs text-slate-400">
                                            {requestHelpers.formatRelativeDate(request.created_at)} - {subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${statusMeta.className}`}>
                                        {statusMeta.label}
                                    </span>
                                    {request.status === "Terminer" && !request.review ? (
                                        <button
                                            type="button"
                                            onClick={() => setSelectedRequest(request)}
                                            className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-orange-600 transition hover:bg-orange-100"
                                        >
                                            Leave a Review
                                        </button>
                                    ) : null}
                                    {request.review ? (
                                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-600">
                                            Review Sent
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
        <ReviewRequestModal
            request={selectedRequest}
            isOpen={Boolean(selectedRequest)}
            onClose={() => setSelectedRequest(null)}
        />
        </>
    );
}

