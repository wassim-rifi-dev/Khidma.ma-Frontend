import {
    FiChevronDown,
    FiMapPin,
    FiSearch,
    FiStar,
    FiTool,
} from "react-icons/fi";
import { MdCleaningServices, MdElectricalServices } from "react-icons/md";

const services = [
    {
        category: "PLUMBING",
        title: "Expert Leak Repair & Pipe Fitting",
        description:
            "Professional plumbing services for residential and commercial spaces.",
        provider: "Ahmed M.",
        location: "Casablanca",
        price: "From - 150 MAD",
        rating: "4.7 (85)",
        image:
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
        topRated: true,
        icon: FiTool,
    },
    {
        category: "CLEANING",
        title: "Deep Home & Office Cleaning",
        description:
            "Comprehensive deep cleaning services using eco-friendly products.",
        provider: "Fatima Z.",
        location: "Rabat",
        price: "From - 150 MAD",
        rating: "4.7 (85)",
        image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
        icon: MdCleaningServices,
    },
    {
        category: "ELECTRICAL",
        title: "Smart Home Wiring & Setup",
        description:
            "Installation of smart devices, lighting systems, and general electrical work.",
        provider: "Youssef B.",
        location: "Marrakech",
        price: "From - 150 MAD",
        rating: "4.7 (85)",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
        icon: MdElectricalServices,
    },
];

function SearchBox({ icon: Icon, placeholder, value, hasChevron = false }) {
    return (
        <div className="flex h-14 items-center gap-3 rounded-2xl bg-[#f5f7fb] px-4 text-slate-400">
            <Icon className="h-5 w-5 shrink-0" />
            <span className="flex-1 text-sm">{value || placeholder}</span>
            {hasChevron ? <FiChevronDown className="h-4 w-4 shrink-0" /> : null}
        </div>
    );
}

export default function Main() {
    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        Explore Services
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-500">
                        Find the right professional for your needs. From skilled
                        tradesmen to creative freelancers, discover top talent ready
                        to help.
                    </p>
                </div>

                <div className="mt-10 rounded-[28px] bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                    <div className="grid gap-3 xl:grid-cols-[1.2fr_0.9fr_0.9fr_auto]">
                        <SearchBox
                            icon={FiSearch}
                            placeholder="What service do you need?"
                        />
                        <SearchBox
                            icon={FiTool}
                            value="What service do you need?"
                            hasChevron
                        />
                        <SearchBox
                            icon={FiMapPin}
                            value="Casablanca"
                            hasChevron
                        />
                        <button className="h-14 rounded-2xl bg-orange-500 px-8 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600">
                            Search
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="overflow-hidden rounded-[30px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover"
                                    />
                                    {service.topRated ? (
                                        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                                            <FiStar className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                            Top Rated
                                        </span>
                                    ) : null}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-semibold tracking-[0.18em] text-orange-500">
                                            {service.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-500">
                                            <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {service.rating}
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
                                                        {service.provider}
                                                    </p>
                                                    <p className="inline-flex items-center gap-1 text-xs text-slate-400">
                                                        <FiMapPin className="h-3.5 w-3.5" />
                                                        {service.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-xs font-medium text-orange-500">
                                                    Starting from
                                                </p>
                                                <p className="mt-1 text-xl font-semibold text-slate-900">
                                                    {service.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-12 flex justify-center">
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#dbe6fb] px-7 py-3 text-sm font-semibold text-slate-500 transition hover:bg-[#cfdcf7]">
                        Load More Services
                        <FiChevronDown className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
