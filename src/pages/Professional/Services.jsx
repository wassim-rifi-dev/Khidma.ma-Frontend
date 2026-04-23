import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowUpRight,
    FiBriefcase,
    FiEdit3,
    FiEye,
    FiPlus,
    FiStar,
    FiTool,
} from "react-icons/fi";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

const services = [
    {
        id: "plumbing-preview",
        title: "Kitchen Plumbing Repair",
        description: "Leak inspection, faucet replacement, sink repair, and practical maintenance for busy homes.",
        price_min: 150,
        price_max: 350,
        rating: 4.9,
        category: { name: "Plumbing" },
    },
    {
        id: "electrical-preview",
        title: "Lighting Installation",
        description: "Ceiling lights, wall fixtures, switch replacement, and safe wiring for small upgrades.",
        price_min: 200,
        price_max: 500,
        rating: 4.7,
        category: { name: "Electrical" },
    },
    {
        id: "painting-preview",
        title: "Room Painting Refresh",
        description: "Wall preparation, interior painting, trim touch-ups, and a clean finish after the job.",
        price_min: 450,
        price_max: 1200,
        rating: 4.8,
        category: { name: "Painting" },
    },
];

function formatPrice(service) {
    if (service?.price_min && service?.price_max) {
        return `${service.price_min} - ${service.price_max} MAD`;
    }

    if (service?.price_min) {
        return `From ${service.price_min} MAD`;
    }

    if (service?.price_max) {
        return `Up to ${service.price_max} MAD`;
    }

    return "Price not set";
}

function getCategoryName(service) {
    return service?.category?.name || service?.categorie?.name || "Service";
}

function ServicesSummary({ services }) {
    const summary = useMemo(() => {
        const priced = services.filter((service) => service.price_min || service.price_max).length;
        const categories = new Set(services.map(getCategoryName)).size;
        const ratingAverage = services.length
            ? services.reduce((total, service) => total + Number(service.rating || 0), 0) / services.length
            : 0;

        return [
            { label: "Published services", value: services.length, icon: FiBriefcase },
            { label: "Priced offers", value: priced, icon: FiTool },
            { label: "Categories", value: categories, icon: FiArrowUpRight },
            { label: "Average rating", value: ratingAverage.toFixed(1), icon: FiStar },
        ];
    }, [services]);

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summary.map(({ label, value, icon: Icon }) => (
                <article key={label} className="rounded-[22px] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-medium text-slate-500">{label}</span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                            <Icon className="h-5 w-5" />
                        </span>
                    </div>
                    <p className="mt-4 text-3xl font-bold text-slate-900">{value}</p>
                </article>
            ))}
        </div>
    );
}

function EmptyServices() {
    return (
        <div className="rounded-[26px] border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <FiPlus className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">No services yet</h2>
            <p className="mx-auto mt-2 max-w-xl text-base leading-7 text-slate-500">
                Add your first offer so clients can discover your work, pricing, and availability.
            </p>
            <Link
                to="/professional/services/create"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-600"
            >
                <FiPlus className="h-5 w-5" />
                Create Service
            </Link>
        </div>
    );
}

function ServiceCard({ service }) {
    const categoryName = getCategoryName(service);
    const rating = Number(service.rating || 0).toFixed(1);

    return (
        <article className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-500">
                    {categoryName}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600">
                    <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {rating}
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
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
                        title="Edit service"
                    >
                        <FiEdit3 className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function Services() {
    return (
        <ProfessionalLayout title="Manage services">
            <div className="mx-auto max-w-7xl">
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

                <ServicesSummary services={services} />

                <div className="mt-8">
                    {services.length ? (
                        <div className="grid gap-6 lg:grid-cols-2">
                            {services.map((service) => (
                                <ServiceCard key={service.id || service.title} service={service} />
                            ))}
                        </div>
                    ) : (
                        <EmptyServices />
                    )}
                </div>

                <ProfessionalFooter />
            </div>
        </ProfessionalLayout>
    );
}
