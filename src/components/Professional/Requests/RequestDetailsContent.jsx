import useProfessionalRequestDetails from "../../../hooks/useProfessionalRequestDetails";
import {
    formatRequestDate,
    formatRequestPrice,
    getProfessionalRequestStatusConfig,
} from "../../../utils/Helpers/Request";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
    FiArrowLeft,
    FiCalendar,
    FiCheckCircle,
    FiMapPin,
    FiMessageCircle,
    FiPhone,
    FiTool,
    FiUser,
    FiX,
} from "react-icons/fi";

export default function RequestDetailsContent() {
    const { requestId } = useParams();
    const { requestDetails, isLoading } = useProfessionalRequestDetails(requestId);

    if (isLoading) {
        return (
            <div className="rounded-[28px] bg-white p-7 shadow-sm text-sm font-medium text-slate-500">
                Loading request details...
            </div>
        );
    }

    if (!requestDetails) {
        return (
            <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <Link
                    to="/professional/requests"
                    className="mb-6 inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                >
                    <FiArrowLeft className="h-4 w-4" />
                    Back
                </Link>
                <p className="text-sm font-medium text-slate-500">Request not found.</p>
            </div>
        );
    }

    const status = getProfessionalRequestStatusConfig(requestDetails.status);
    const clientName = `${requestDetails.client?.first_name || ""} ${requestDetails.client?.last_name || ""}`.trim() || "Client";
    const serviceCategory = requestDetails.service?.category?.name || requestDetails.service?.categorie?.name || "Service";
    const serviceTitle = requestDetails.service?.title || "Requested service";
    const preferredDateTime = [requestDetails.preferred_date, requestDetails.preferred_time].filter(Boolean).join(" - ") || "Not specified";

    return (
        <>
            <Link
                to="/professional/requests"
                className="mb-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-[#ff781f] hover:text-white"
            >
                <FiArrowLeft className="h-4 w-4" />
                Back
            </Link>

            <section className="rounded-[28px] bg-white p-7 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold ${status.className}`}>
                        <span className="h-2 w-2 rounded-full bg-current" />
                        {status.label}
                    </span>
                    <span className="text-sm font-bold tracking-wide text-stone-500">#{requestDetails.id}</span>
                </div>

                <h1 className="mt-4 text-5xl font-bold tracking-normal text-[#1f252b]">
                    {serviceTitle}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-semibold text-stone-600">
                    <span className="inline-flex items-center gap-2">
                        <FiUser className="h-5 w-5" />
                        {clientName}
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <FiCalendar className="h-5 w-5" />
                        {formatRequestDate(requestDetails.preferred_date || requestDetails.created_at)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <FiMapPin className="h-5 w-5" />
                        {requestDetails.address || requestDetails.service?.city || "Location not set"}
                    </span>
                </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
                <div className="space-y-6">
                    <article className="rounded-[28px] border-l-4 border-[#ff781f] bg-white p-6 shadow-sm">
                        <h2 className="flex items-center gap-2 text-lg font-bold text-[#1f252b]">
                            <FiMessageCircle className="h-4 w-4 text-[#ff781f]" />
                            Message from Client
                        </h2>

                        <div className="mt-4 rounded-2xl bg-[#f6f7f9] px-5 py-4 text-sm font-medium leading-6 text-stone-700">
                            {requestDetails.message || "No message provided by the client."}
                        </div>
                    </article>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <article className="rounded-[28px] bg-white p-6 shadow-sm">
                            <h2 className="flex items-center gap-2 border-b border-slate-100 pb-4 text-base font-bold text-[#1f252b]">
                                <FiUser className="h-4 w-4" />
                                Client Information
                            </h2>

                            <div className="mt-5 space-y-4 text-sm">
                                <div>
                                    <p className="text-xs font-semibold text-stone-500">Name</p>
                                    <p className="mt-1 font-bold text-[#1f252b]">{clientName}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-stone-500">Phone</p>
                                    <p className="mt-1 font-bold text-[#1f252b]">{requestDetails.client?.phone || "Phone not available"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-stone-500">Location</p>
                                    <p className="mt-1 font-bold text-[#1f252b]">{requestDetails.address || requestDetails.service?.city || "Location not set"}</p>
                                </div>
                            </div>
                        </article>

                        <article className="rounded-[28px] bg-white p-6 shadow-sm">
                            <h2 className="flex items-center gap-2 border-b border-slate-100 pb-4 text-base font-bold text-[#1f252b]">
                                <FiTool className="h-4 w-4" />
                                Service Details
                            </h2>

                            <div className="mt-5 space-y-4 text-sm">
                                <div>
                                    <p className="text-xs font-semibold text-stone-500">Category</p>
                                    <p className="mt-1 font-bold text-[#1f252b]">{serviceCategory}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-stone-500">Requested Service</p>
                                    <p className="mt-1 font-bold text-[#1f252b]">{serviceTitle}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-stone-500">Preferred Date & Time</p>
                                    <p className="mt-1 font-bold text-[#b94f12]">{preferredDateTime}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <aside className="rounded-[28px] bg-white p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl font-black text-sky-700">
                        !
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-[#1f252b]">Take Action</h2>
                    <p className="mt-1 text-xs font-semibold text-stone-500">Respond quickly to secure this job.</p>

                    <div className="mt-5 rounded-2xl bg-[#f6f7f9] p-4 text-left text-sm">
                        <div className="flex items-center justify-between py-2">
                            <span className="text-xs font-semibold text-stone-500">Service</span>
                            <span className="font-bold text-[#1f252b]">{serviceCategory}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-xs font-semibold text-stone-500">Location</span>
                            <span className="font-bold text-[#1f252b]">{requestDetails.address || requestDetails.service?.city || "Location not set"}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-xs font-semibold text-stone-500">Estimated Value</span>
                            <span className="font-bold text-[#b94f12]">{formatRequestPrice(requestDetails.price)}</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#df660f] text-sm font-bold text-white transition hover:bg-[#c9580c]"
                    >
                        <FiCheckCircle className="h-4 w-4" />
                        Accept Request
                    </button>

                    <button
                        type="button"
                        className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#e8b79e] bg-white text-sm font-bold text-stone-700 transition hover:bg-orange-50"
                    >
                        <FiX className="h-4 w-4" />
                        Reject Request
                    </button>

                    <button
                        type="button"
                        className="mt-5 flex h-11 items-center justify-center gap-2 rounded-full bg-[#dbe5f4] text-sm font-bold text-slate-600 transition hover:bg-[#cddcf0] w-full"
                    >
                        <FiMessageCircle className="h-4 w-4" />
                        Chat
                    </button>
                </aside>
            </section>
        </>
    );
}
