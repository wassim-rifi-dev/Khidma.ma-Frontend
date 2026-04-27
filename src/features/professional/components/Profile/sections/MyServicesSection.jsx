import { Link } from "react-router-dom";
import { FiArrowUpRight, FiDroplet, FiHome, FiPlus, FiTool } from "react-icons/fi";

const serviceIcons = [
    { icon: FiHome, iconStyle: "bg-orange-100 text-orange-500" },
    { icon: FiDroplet, iconStyle: "bg-sky-100 text-sky-500" },
    { icon: FiTool, iconStyle: "bg-slate-100 text-slate-500" },
];

function formatServicePrice(service) {
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

export default function MyServicesSection({ services = [] }) {
    return (
        <section className="mx-auto mt-8 w-full max-w-6xl">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">My Services</h2>
                <p className="mt-1 text-base text-slate-500">Manage your offerings and pricing.</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
                <div className="grid gap-6 md:grid-cols-2">
                    {services.map((service, index) => {
                        const { icon: Icon, iconStyle } = serviceIcons[index % serviceIcons.length];
                        const categoryName = service?.category?.name || service?.categorie?.name || "Service";

                        return (
                        <article
                            key={service.id || service.title}
                            className="rounded-[22px] border border-slate-100 bg-white p-6 shadow-sm"
                        >
                            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${iconStyle}`}>
                                <Icon className="h-5 w-5" />
                            </span>

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                            <p className="mt-2 min-h-12 text-base leading-6 text-slate-500">
                                {service.description || "No description provided yet."}
                            </p>

                            <div className="mt-5 border-t border-slate-100 pt-4">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
                                        {categoryName}
                                    </span>
                                    <span className="text-base font-bold text-[#A34E0D]">{formatServicePrice(service)}</span>
                                </div>
                            </div>
                        </article>
                        );
                    })}

                    <Link
                        to="/professional/services/create"
                        className="flex min-h-[205px] flex-col items-center justify-center rounded-[22px] border border-dashed border-slate-200 bg-white/40 p-6 text-center transition hover:border-orange-200 hover:bg-orange-50/40"
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#A34E0D] shadow-sm">
                            <FiPlus className="h-6 w-6" />
                        </span>
                        <span className="mt-5 text-lg font-semibold text-slate-900">Create New Service</span>
                        <span className="mt-1 text-sm font-medium text-slate-500">Add a new offering to your catalog</span>
                    </Link>
                </div>

                <aside className="rounded-[30px] bg-[#252a2b] p-7 text-white shadow-[0_22px_55px_rgba(15,23,42,0.18)] xl:self-start">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-orange-300">
                        <FiArrowUpRight className="h-5 w-5" />
                    </span>

                    <h3 className="mt-6 text-2xl font-semibold">Get More Clients</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                        Profiles with a portfolio gallery receive 40% more booking requests. Add photos of your recent work.
                    </p>

                    <button
                        type="button"
                        className="mt-7 w-full rounded-full bg-orange-300 px-6 py-3.5 text-base font-semibold text-[#4a2a13] transition hover:bg-orange-400"
                    >
                        Improve Profile
                    </button>
                </aside>
            </div>
        </section>
    );
}
