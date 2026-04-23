import { FiEdit3, FiEye, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../utils/Helpers/Services";

export default function ServiceCard({ service, onEdit }) {
    return (
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-500">
                    {service?.category?.name || service?.categorie?.name || "Service"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600">
                    <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {Number(service.rating || 0).toFixed(1)}
                </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">{service.title || "Untitled service"}</h2>
            <p className="mt-3 min-h-18 text-sm leading-7 text-slate-500">
                {service.description || "No description provided yet."}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Price</p>
                    <p className="mt-1 text-lg font-bold text-[#A34E0D]">{formatPrice(service)}</p>
                </div>

                <div className="flex items-center gap-2">
                    {service.id ? (
                        <Link
                            to={`/professional/services/${service.id}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
                            title="Preview service"
                        >
                            <FiEye className="h-4 w-4" />
                        </Link>
                    ) : null}
                    {onEdit ? (
                        <button
                            type="button"
                            onClick={() => onEdit(service)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
                            title="Edit service"
                        >
                            <FiEdit3 className="h-4 w-4" />
                        </button>
                    ) : null}
                </div>
            </div>
        </article>
    );
}
