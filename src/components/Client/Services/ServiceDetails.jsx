import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiChevronRight,
    FiClock,
    FiMapPin,
    FiShield,
    FiStar,
} from "react-icons/fi";
import defaultProfile from "../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../utils/getUserPhotoUrl";
import RequestServiceModal from "../Shared/RequestServiceModal";

const fallbackImage =
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80";

function StateMessage({ children, tone = "default" }) {
    const color = tone === "error" ? "text-red-500" : "text-slate-500";

    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-10 sm:px-6 lg:px-8">
            <div className={`mx-auto max-w-7xl rounded-[30px] bg-white p-8 text-center text-sm ${color} shadow-sm`}>
                {children}
            </div>
        </section>
    );
}

export default function ServiceDetails({ details, isLoading, error }) {
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

    if (isLoading) {
        return <StateMessage>Loading service...</StateMessage>;
    }

    if (error || !details) {
        return <StateMessage tone="error">{error || "Service not found."}</StateMessage>;
    }

    const { service, professional, reviews, price, rating, mainImage } = details;
    const categoryName = service.category?.name || "Service";
    const professionalUser = professional?.user || {};
    const professionalPhoto = getUserPhotoUrl(professionalUser.photo);
    const professionalName = professionalUser.name || "Professional";
    const professionalCategory = professional?.category?.name || categoryName;
    const location = service.city || professional?.city || "Morocco";

    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[#dfe8fb] px-3 py-1 text-slate-600">
                        {categoryName}
                    </span>
                    <FiChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-slate-400">{location}</span>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                    {service.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                        <FiStar className="h-4 w-4 fill-orange-400 text-orange-400" />
                        <span>
                            <strong className="font-semibold text-slate-900">{rating}</strong>{" "}
                            <span className="text-slate-400">({reviews.length} reviews)</span>
                        </span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                        <FiMapPin className="h-4 w-4" />
                        {location}
                    </span>
                </div>

                <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
                    <div>
                        <img
                            src={mainImage || fallbackImage}
                            alt={service.title}
                            className="h-75 w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:h-90"
                        />
                    </div>

                    <aside className="self-start rounded-2xl bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                        <div className="text-center">
                            <p className="text-sm text-slate-400">Estimated Price</p>
                            <p className="mt-2 text-[2rem] font-semibold leading-none text-slate-900">
                                {price}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsRequestModalOpen(true)}
                            className="mt-7 w-full rounded-full bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                        >
                            Request Service
                        </button>

                        <div className="mt-8 space-y-4 border-t border-slate-100 pt-6 text-sm text-slate-500">
                            <div className="flex items-center gap-3">
                                <FiShield className="h-4 w-4 text-orange-500" />
                                <span>{professionalUser.is_active ? "Verified Professional" : "Professional"}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiClock className="h-4 w-4 text-orange-500" />
                                <span>Rating {rating}</span>
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="mt-8 grid gap-6 xl:max-w-[calc(100%-304px)]">
                    <section className="rounded-[30px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            About this service
                        </h2>
                        <p className="mt-5 max-w-4xl text-sm leading-8 text-slate-500">
                            {service.description || "This service has no description yet."}
                        </p>
                    </section>

                    <section className="rounded-[30px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                            <img
                                src={professionalPhoto || defaultProfile}
                                alt={professionalName}
                                className="h-16 w-16 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {professionalName}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-orange-500">
                                    {professionalCategory}
                                </p>
                                <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-500">
                                    {professional?.description || "This professional has not added a description yet."}
                                </p>
                                {professional?.id ? (
                                    <Link
                                        to={`/professional/${professional.id}`}
                                        className="mt-4 inline-flex text-sm font-semibold text-orange-500 hover:underline"
                                    >
                                        View professional profile
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <RequestServiceModal
                isOpen={isRequestModalOpen}
                onClose={() => setIsRequestModalOpen(false)}
                serviceId={service.id}
                serviceTitle={service.title}
                professionalName={professionalName}
                location={location}
                price={price}
            />
        </section>
    );
}
