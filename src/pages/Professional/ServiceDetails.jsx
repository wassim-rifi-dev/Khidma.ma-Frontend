import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    FiArrowLeft,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiEdit3,
    FiEye,
    FiImage,
    FiMapPin,
    FiMessageCircle,
    FiStar,
    FiTool,
    FiUsers,
} from "react-icons/fi";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import EditServiceModal from "../../components/Professional/Services/Edit/EditServiceModal";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

const services = [
    {
        id: "plumbing-preview",
        title: "Kitchen Plumbing Repair",
        category: "Plumbing",
        city: "Casablanca",
        price: "150 - 350 MAD",
        rating: 4.9,
        requests: 42,
        completed: 34,
        responseTime: "Under 1 hour",
        status: "Published",
        description:
            "Leak inspection, faucet replacement, sink repair, drain cleaning, and practical maintenance for busy homes.",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
                title: "Sink repair setup",
            },
            {
                src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
                title: "Pipe inspection",
            },
            {
                src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
                title: "Finished faucet work",
            },
        ],
        includes: ["Leak inspection", "Faucet replacement", "Sink repair", "Basic pipe maintenance"],
        recentRequests: [
            { client: "Fatima Z.", date: "Today, 10:30 AM", status: "New", value: "250 MAD" },
            { client: "Omar B.", date: "Apr 21, 2026", status: "Completed", value: "300 MAD" },
            { client: "Nora M.", date: "Apr 18, 2026", status: "Completed", value: "180 MAD" },
        ],
    },
    {
        id: "electrical-preview",
        title: "Lighting Installation",
        category: "Electrical",
        city: "Rabat",
        price: "200 - 500 MAD",
        rating: 4.7,
        requests: 31,
        completed: 24,
        responseTime: "Same day",
        status: "Published",
        description:
            "Ceiling lights, wall fixtures, switch replacement, and safe wiring for small home upgrades.",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
                title: "Ceiling light install",
            },
            {
                src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
                title: "Switch wiring check",
            },
            {
                src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200&q=80",
                title: "Room lighting result",
            },
        ],
        includes: ["Fixture mounting", "Switch replacement", "Cable check", "Safety test"],
        recentRequests: [
            { client: "Youssef A.", date: "Yesterday, 4:15 PM", status: "In Progress", value: "420 MAD" },
            { client: "Sara K.", date: "Apr 20, 2026", status: "Completed", value: "350 MAD" },
        ],
    },
    {
        id: "painting-preview",
        title: "Room Painting Refresh",
        category: "Painting",
        city: "Marrakech",
        price: "450 - 1200 MAD",
        rating: 4.8,
        requests: 27,
        completed: 21,
        responseTime: "Within 2 hours",
        status: "Published",
        description:
            "Wall preparation, interior painting, trim touch-ups, and a clean finish after the job.",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
                title: "Wall preparation",
            },
            {
                src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
                title: "Fresh paint finish",
            },
            {
                src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
                title: "Clean room result",
            },
        ],
        includes: ["Wall preparation", "Two coat painting", "Trim touch-ups", "Cleanup"],
        recentRequests: [
            { client: "Adam W.", date: "Apr 19, 2026", status: "Completed", value: "950 MAD" },
            { client: "Lina H.", date: "Apr 17, 2026", status: "Completed", value: "780 MAD" },
        ],
    },
];

const statusStyles = {
    New: "bg-orange-50 text-orange-600",
    "In Progress": "bg-sky-50 text-sky-600",
    Completed: "bg-emerald-50 text-emerald-600",
};

function StatCard({ label, value, icon: Icon }) {
    return (
        <article className="rounded-[22px] border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-slate-500">{label}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <Icon className="h-5 w-5" />
                </span>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900">{value}</p>
        </article>
    );
}

function ServiceGallery({ photos }) {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
    const selectedPhoto = photos[selectedPhotoIndex] || photos[0];

    return (
        <article className="mt-6 rounded-[28px] bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Service photos</h2>
                    <p className="mt-1 text-sm font-medium text-slate-500">Portfolio images clients can see before requesting.</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <FiImage className="h-5 w-5" />
                </span>
            </div>

            <div className="space-y-4">
                <figure className="overflow-hidden rounded-[22px] bg-slate-100">
                    <img
                        src={selectedPhoto.src}
                        alt={selectedPhoto.title}
                        className="h-86 w-full object-cover"
                    />
                </figure>

                <div className="grid gap-4 sm:grid-cols-3">
                    {photos.map((photo, index) => (
                        <button
                            key={photo.title}
                            type="button"
                            onClick={() => setSelectedPhotoIndex(index)}
                            className={`group overflow-hidden rounded-[28px] border bg-slate-100 text-left shadow-sm ring-2 transition hover:ring-orange-300 ${
                                selectedPhotoIndex === index
                                    ? "border-orange-200 ring-orange-300"
                                    : "border-slate-100 ring-transparent"
                            }`}
                            title={photo.title}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="h-24 w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function ServiceDetails() {
    const { serviceId } = useParams();
    const [service, setService] = useState(services.find((item) => item.id === serviceId) || services[0]);
    const [isEditOpen, setIsEditOpen] = useState(false);

    function handleSaveService(_, nextService) {
        setService((currentService) => ({
            ...currentService,
            ...nextService,
            price: nextService.price_min && nextService.price_max
                ? `${nextService.price_min} - ${nextService.price_max} MAD`
                : nextService.price_min
                    ? `From ${nextService.price_min} MAD`
                    : currentService.price,
        }));
        setIsEditOpen(false);
    }

    return (
        <ProfessionalLayout title="Service details" contentClassName="pt-24">
            <div className="mx-auto max-w-7xl">
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
                                    {service.category}
                                </span>
                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600">
                                    {service.status}
                                </span>
                            </div>

                            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
                                {service.title}
                            </h1>

                            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-semibold text-slate-600">
                                <span className="inline-flex items-center gap-2">
                                    <FiMapPin className="h-5 w-5 text-slate-400" />
                                    {service.city}
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <FiStar className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    {service.rating}
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <FiClock className="h-5 w-5 text-slate-400" />
                                    {service.responseTime}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                            >
                                <FiEye className="h-4 w-4" />
                                Public Preview
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditOpen(true)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-600"
                            >
                                <FiEdit3 className="h-4 w-4" />
                                Edit Service
                            </button>
                        </div>
                    </div>
                </section>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <StatCard label="Price range" value={service.price} icon={FiTool} />
                    <StatCard label="Total requests" value={service.requests} icon={FiUsers} />
                    <StatCard label="Completed jobs" value={service.completed} icon={FiCheckCircle} />
                    <StatCard label="Response time" value={service.responseTime} icon={FiClock} />
                </div>

                <ServiceGallery photos={service.photos} />

                <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
                    <div className="space-y-6">
                        <article className="rounded-[28px] bg-white p-7 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900">Service description</h2>
                            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-500">
                                {service.description}
                            </p>
                        </article>

                        <article className="rounded-[28px] bg-white p-7 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900">What this service includes</h2>
                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                {service.includes.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        <FiCheckCircle className="h-5 w-5 text-emerald-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    <aside className="rounded-[28px] bg-white p-7 shadow-sm xl:self-start">
                        <h2 className="text-xl font-bold text-slate-900">Recent requests</h2>
                        <div className="mt-5 space-y-4">
                            {service.recentRequests.map((request) => (
                                <article key={`${request.client}-${request.date}`} className="rounded-2xl bg-slate-50 p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="font-bold text-slate-900">{request.client}</h3>
                                            <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                                                <FiCalendar className="h-3.5 w-3.5" />
                                                {request.date}
                                            </p>
                                        </div>
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusStyles[request.status]}`}>
                                            {request.status}
                                        </span>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between border-t border-white pt-3">
                                        <span className="text-sm font-semibold text-slate-500">Value</span>
                                        <span className="text-sm font-bold text-[#A34E0D]">{request.value}</span>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-100 text-sm font-bold text-slate-600 transition hover:bg-slate-200"
                        >
                            <FiMessageCircle className="h-4 w-4" />
                            Open Messages
                        </button>
                    </aside>
                </section>

                <ProfessionalFooter />
            </div>

            <EditServiceModal
                service={service}
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                onSave={handleSaveService}
            />
        </ProfessionalLayout>
    );
}
