import { useState } from "react";
import { FiArrowLeft, FiEdit3, FiEye, FiStar, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../../../services/hooks/useServiceDetails";
import EditServiceModal from "../Edit/EditServiceModal";
import ServiceGallery from "./ServiceGallery";
import ServiceInfoGrid from "./ServiceInfoGrid";
import ServiceRecentRequests from "./ServiceRecentRequests";
import ServiceStats from "./ServiceStats";

export default function ServiceDetailsSection() {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const { details, isLoading, error, isSaving, isDeleting, saveService, removeService } = useServiceDetails(serviceId);
    const [isEditOpen, setIsEditOpen] = useState(false);

    async function handleSaveService(_, nextService) {
        const isSaved = await saveService(nextService);

        if (isSaved) {
            setIsEditOpen(false);
        }
    }

    async function handleDeleteService() {
        const isDeleted = await removeService();

        if (isDeleted) {
            navigate("/professional/services");
        }
    }

    if (isLoading) {
        return (
            <div className="rounded-[28px] bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
                Loading service details...
            </div>
        );
    }

    if (error || !details) {
        return (
            <div className="rounded-[28px] bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
                Service details unavailable.
            </div>
        );
    }

    return (
        <>
            <Link
                to="/professional/services"
                className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-orange-500 hover:text-white"
            >
                <FiArrowLeft className="h-4 w-4" />
                Back to services
            </Link>

            <section className="rounded-[30px] bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-bold text-orange-600">
                                {details.info.category}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600">
                                {details.info.status}
                            </span>
                        </div>

                        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
                            {details.info.title}
                        </h1>

                        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-semibold text-slate-600">
                            <span>{details.info.city}</span>
                            <span className="inline-flex items-center gap-2">
                                <FiStar className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                {details.info.rating}
                            </span>
                            <span>{details.info.price}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            to={`/services/${details.service.id}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                        >
                            <FiEye className="h-4 w-4" />
                            Public Preview
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsEditOpen(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-600"
                        >
                            <FiEdit3 className="h-4 w-4" />
                            Edit Service
                        </button>
                        <button
                            type="button"
                            onClick={handleDeleteService}
                            disabled={isDeleting}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-6 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            <FiTrash2 className="h-4 w-4" />
                            {isDeleting ? "Deleting..." : "Delete Service"}
                        </button>
                    </div>
                </div>
            </section>

            <ServiceStats stats={details.stats} />

            {details.hasImages ? <ServiceGallery images={details.images} /> : null}

            <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
                <div className="space-y-6">
                    <article className="rounded-[28px] bg-white p-7 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900">Service description</h2>
                        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-500">
                            {details.info.description}
                        </p>
                    </article>

                    <ServiceInfoGrid items={details.detailsSections} />
                </div>

                <ServiceRecentRequests requests={details.recentRequests} hasRequests={details.hasRecentRequests} />
            </section>

            <EditServiceModal
                service={details.service}
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                onSave={handleSaveService}
                isSaving={isSaving}
            />
        </>
    );
}
