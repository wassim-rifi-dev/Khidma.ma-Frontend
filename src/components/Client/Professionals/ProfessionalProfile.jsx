import { useState } from "react";
import {
    FiAward,
    FiCheckCircle,
    FiClock,
    FiMapPin,
    FiMessageSquare,
    FiShield,
    FiStar,
    FiTool,
} from "react-icons/fi";
import { MdCleaningServices, MdElectricalServices } from "react-icons/md";
import defaultProfile from "../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../utils/getUserPhotoUrl";
import RequestServiceModal from "../Shared/RequestServiceModal";

function getServiceIcon(index) {
    const icons = [FiTool, MdCleaningServices, MdElectricalServices];
    return icons[index % icons.length];
}

function EmptyState({ children }) {
    return (
        <div className="rounded-2xl bg-white p-6 text-center text-sm text-slate-500 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {children}
        </div>
    );
}

export default function ProfessionalProfile({ profile, isLoading, error }) {
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

    if (isLoading) {
        return (
            <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-[30px] bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
                    Loading professional profile...
                </div>
            </section>
        );
    }

    if (error || !profile) {
        return (
            <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-[30px] bg-white p-8 text-center text-sm text-red-500 shadow-sm">
                    {error || "Professional profile not found."}
                </div>
            </section>
        );
    }

    const { professional, services, reviews, recentImages, reviewCount, completedRequests, serviceCount } = profile;
    const user = professional.user;
    const photoUrl = getUserPhotoUrl(user.photo);
    const categoryName = professional.category?.name;
    const rating = Number(professional.rating || 0).toFixed(1);
    const location = professional.city;
    const firstService = services[0];
    const quickInfo = [
        { icon: FiTool, label: "Category", value: categoryName },
        { icon: FiMapPin, label: "Service Area", value: location },
        { icon: FiClock, label: "Services", value: serviceCount },
        { icon: FiShield, label: "Identity", value: user.is_active ? "Verified" : "Pending", accent: user.is_active },
    ];

    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-[30px] bg-white px-6 py-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:px-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        <div className="relative h-28 w-28 shrink-0">
                            <img
                                src={photoUrl || defaultProfile}
                                alt={user.name || "Professional"}
                                className="h-full w-full rounded-full object-cover ring-4 ring-cyan-100"
                            />
                            {user.is_active ? (
                                <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#dfe8fb] text-slate-600 shadow-sm">
                                    <FiCheckCircle className="h-3.5 w-3.5" />
                                </span>
                            ) : null}
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                                    {user.name || "Professional"}
                                </h1>
                                <span className="rounded-full bg-[#dfe8fb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    {categoryName}
                                </span>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                                <span className="inline-flex items-center gap-1.5">
                                    <FiMapPin className="h-4 w-4" />
                                    {location}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <FiStar className="h-4 w-4 fill-orange-400 text-orange-400" />
                                    <span>
                                        <strong className="font-semibold text-slate-900">{rating}</strong>{" "}
                                        <span className="text-slate-400">({reviewCount} reviews)</span>
                                    </span>
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsRequestModalOpen(true)}
                                    className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                                    disabled={!firstService}
                                >
                                    Request Service
                                </button>
                                <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-200">
                                    <FiMessageSquare className="h-4 w-4" />
                                    Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="space-y-6">
                        <section className="rounded-[30px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                About Me
                            </h2>
                            <p className="mt-5 text-sm leading-8 text-slate-500">
                                {professional.description || "This professional has not added a description yet."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Services Offered
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {services.length === 0 ? (
                                    <div className="md:col-span-2">
                                        <EmptyState>No services available for this professional.</EmptyState>
                                    </div>
                                ) : (
                                    services.map((service, index) => {
                                        const Icon = getServiceIcon(index);

                                        return (
                                            <article
                                                key={service.id}
                                                className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                                            >
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3ff] text-slate-700">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                                    {service.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                                    {service.description || "No description provided."}
                                                </p>
                                                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
                                                    <span>{service.city || location}</span>
                                                    <span>{Number(service.rating || 0).toFixed(1)} rating</span>
                                                    <span>
                                                        {service.price_min ? `${service.price_min} MAD` : "Contact for price"}
                                                    </span>
                                                </div>
                                            </article>
                                        );
                                    })
                                )}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Recent Work
                            </h2>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {recentImages.length === 0 ? (
                                    <div className="sm:col-span-2 lg:col-span-3">
                                        <EmptyState>No recent work images uploaded yet.</EmptyState>
                                    </div>
                                ) : (
                                    recentImages.map((src, index) => (
                                        <div
                                            key={`${src}-${index}`}
                                            className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                                        >
                                            <img
                                                src={src}
                                                alt={`Recent work ${index + 1}`}
                                                className="h-44 w-full object-cover"
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Customer Reviews
                            </h2>
                            <div className="mt-5 space-y-4">
                                {reviews.length === 0 ? (
                                    <EmptyState>No customer reviews yet.</EmptyState>
                                ) : (
                                    reviews.map((review) => (
                                        <article
                                            key={review.id}
                                            className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    {review.avatar ? (
                                                        <img
                                                            src={review.avatar}
                                                            alt={review.name}
                                                            className="h-11 w-11 rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe8fb] text-sm font-semibold text-slate-600">
                                                            {review.avatarLetter}
                                                        </div>
                                                    )}

                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-900">
                                                            {review.name}
                                                        </p>
                                                        <p className="text-xs text-slate-400">
                                                            {review.location} - {review.time}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1 text-orange-400">
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <FiStar
                                                            key={`${review.id}-${index}`}
                                                            className={`h-4 w-4 ${index < review.rating ? "fill-current" : ""}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="mt-4 text-sm leading-7 text-slate-500">
                                                {review.text}
                                            </p>
                                        </article>
                                    ))
                                )}
                            </div>
                        </section>
                    </div>

                    <aside className="self-start rounded-[30px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] xl:sticky xl:top-24">
                        <h2 className="text-2xl font-semibold text-slate-900">Quick Info</h2>

                        <div className="mt-6 space-y-4">
                            {quickInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                                    >
                                        <div className="flex items-center gap-3 text-sm text-slate-500">
                                            <Icon className="h-4 w-4" />
                                            <span>{item.label}</span>
                                        </div>
                                        <span
                                            className={`text-sm font-medium ${item.accent ? "text-orange-500" : "text-slate-700"}`}
                                        >
                                            {item.value}
                                            {item.accent ? (
                                                <FiAward className="ml-1 inline h-4 w-4" />
                                            ) : null}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 space-y-3">
                            <button
                                type="button"
                                onClick={() => setIsRequestModalOpen(true)}
                                className="w-full rounded-full bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                                disabled={!firstService}
                            >
                                Request Service
                            </button>
                            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-3.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200">
                                <FiMessageSquare className="h-4 w-4" />
                                Send Message
                            </button>
                        </div>

                        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
                            Completed requests:{" "}
                            <span className="font-semibold text-slate-800">{completedRequests}</span>
                        </div>
                    </aside>
                </div>
            </div>

            <RequestServiceModal
                isOpen={isRequestModalOpen}
                onClose={() => setIsRequestModalOpen(false)}
                serviceTitle={firstService?.title}
                professionalName={user.name}
                location={firstService?.city || location}
                price={firstService?.price_min ? `${firstService.price_min} MAD` : "Contact for price"}
            />
        </section>
    );
}
