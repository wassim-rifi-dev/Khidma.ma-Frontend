import { useEffect, useState } from "react";
import { FiTool } from "react-icons/fi";
import { getLastSixClientRequest } from "../../../../../services/RequestServices";
import RecentRequestsMessage from "./RecentRequestsMessage";

export default function RecentRequestsCard() {
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRecentRequests() {
            try {
                const response = await getLastSixClientRequest();
                setRequests(response.data.requests ?? []);
            } catch (error) {
                console.error("Error fetching recent requests:", error);
                setRequests([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecentRequests();
    }, []);

    function formatDate(dateValue) {
        if (!dateValue) {
            return "No date";
        }

        return new Date(dateValue).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    function getStatusMeta(status) {
        if (status === "Terminer") {
            return {
                label: "COMPLETED",
                className: "bg-green-100 text-green-600",
            };
        }

        if (status === "En_Cour") {
            return {
                label: "IN PROGRESS",
                className: "bg-blue-100 text-blue-600",
            };
        }

        return {
            label: "NEW",
            className: "bg-orange-100 text-orange-500",
        };
    }

    return (
        <section className="rounded-[28px] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
            <h2 className="mb-5 text-lg font-semibold text-slate-900">Recent Requests</h2>

            {isLoading ? (
                <RecentRequestsMessage message="Loading recent requests..." />
            ) : requests.length === 0 ? (
                <RecentRequestsMessage
                    message="No recent requests yet"
                    description="Your latest service requests will appear here once you create one."
                />
            ) : (
                <div className="space-y-3">
                    {requests.map((request) => {
                        const statusMeta = getStatusMeta(request.status);
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
                                            {formatDate(request.created_at)} - {subtitle}
                                        </p>
                                    </div>
                                </div>

                                <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${statusMeta.className}`}>
                                    {statusMeta.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
