import { FiPlus, FiRotateCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import useProfessionalServices from "../../../hooks/useProfessionalServices";
import EmptyServices from "./EmptyServices";
import ServiceCard from "./ServiceCards";
import ServicesSummary from "./ServicesSummary";

function LoadingCard() {
    return (
        <article className="animate-pulse rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div className="h-7 w-28 rounded-md bg-slate-200" />
                <div className="h-5 w-12 rounded bg-slate-200" />
            </div>

            <div className="mt-5 h-8 w-3/4 rounded bg-slate-200" />
            <div className="mt-3 space-y-3">
                <div className="h-4 w-full rounded bg-slate-100" />
                <div className="h-4 w-11/12 rounded bg-slate-100" />
                <div className="h-4 w-2/3 rounded bg-slate-100" />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div>
                    <div className="h-3 w-12 rounded bg-slate-100" />
                    <div className="mt-2 h-6 w-24 rounded bg-slate-200" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-slate-100" />
                    <div className="h-10 w-10 rounded-full bg-slate-100" />
                </div>
            </div>
        </article>
    );
}

export default function AllServices() {
    const {
        services,
        trashedServices,
        summary,
        isLoading,
        isUpdating,
        restoreService,
    } = useProfessionalServices();

    return (
        <>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">Services</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Your service catalog</h1>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
                        Keep your offers clear, priced, and ready for clients to request.
                    </p>
                </div>

                <Link
                    to="/professional/services/create"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-600"
                >
                    <FiPlus className="h-5 w-5" />
                    Create Service
                </Link>
            </div>

            <ServicesSummary summary={summary} isLoading={isLoading} />

            <div className="mt-8">
                {isLoading ? (
                    <div className="grid gap-6 lg:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <LoadingCard key={index} />
                        ))}
                    </div>
                ) : services.length ? (
                    <div className="grid gap-6 lg:grid-cols-2">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id || service.title}
                                service={service}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyServices />
                )}
            </div>

            {!isLoading && trashedServices.length ? (
                <section className="mt-10">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold text-slate-900">Deleted services</h2>
                        <p className="mt-1 text-base text-slate-500">Restore any service you want to publish again.</p>
                    </div>

                    <div className="grid gap-4">
                        {trashedServices.map((service) => (
                            <article
                                key={service.id}
                                className="flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between"
                            >
                                <div>
                                    <p className="text-lg font-semibold text-slate-900">{service.title || "Untitled service"}</p>
                                    <p className="mt-1 text-sm text-slate-500">{service.description || "No description provided yet."}</p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => restoreService(service.id)}
                                    disabled={isUpdating}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    <FiRotateCcw className="h-4 w-4" />
                                    Restore
                                </button>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}
        </>
    );
}
