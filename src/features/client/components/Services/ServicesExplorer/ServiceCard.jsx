import { Link } from "react-router-dom";
import { FiMapPin, FiStar } from "react-icons/fi";
import { getServiceIcon, getServiceProviderName } from "../../../../../shared/utils/Helpers/client/Services";

export default function ServiceCard({ service, image, iconIndex }) {
    const Icon = getServiceIcon(iconIndex);
    const providerName = getServiceProviderName(service);
    const price = service.price_min
        ? `${service.price_min} MAD`
        : "Contact for price";
    const rating = Number(service.rating || 0).toFixed(1);
    const isTopRated = Number(service.rating || 0) >= 4.5;

    return (
        <Link
            to={`/services/${service.id}`}
            className="block overflow-hidden rounded-[30px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                />
                {isTopRated ? (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                        <FiStar className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        Top Rated
                    </span>
                ) : null}
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.18em] text-orange-500">
                        {(service.category?.name || "SERVICE").toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-500">
                        <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {rating}
                    </span>
                </div>

                <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight text-slate-900">
                    {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="flex items-end justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">
                                    {providerName}
                                </p>
                                <p className="inline-flex items-center gap-1 text-xs text-slate-400">
                                    <FiMapPin className="h-3.5 w-3.5" />
                                    {service.city || "Morocco"}
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-xs font-medium text-orange-500">
                                Starting from
                            </p>
                            <p className="mt-1 text-xl font-semibold text-slate-900">
                                {price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
