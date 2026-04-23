import { useMemo, useState } from "react";
import { FiCheckCircle, FiClock, FiInbox, FiMapPin, FiMessageCircle, FiUser } from "react-icons/fi";

const filters = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "In Progress", value: "in-progress" },
    { label: "New", value: "new" },
];

const requests = [
    {
        id: "#ORD-1048",
        client: "Sarah Miller",
        service: "Kitchen plumbing repair",
        city: "Casablanca",
        date: "Today, 10:30 AM",
        price: "$85",
        status: "new",
        message: "Leaking sink needs urgent inspection.",
    },
    {
        id: "#ORD-1047",
        client: "Youssef Amrani",
        service: "Electrical installation",
        city: "Rabat",
        date: "Yesterday, 4:15 PM",
        price: "$120",
        status: "in-progress",
        message: "Install lighting fixtures in two rooms.",
    },
    {
        id: "#ORD-1046",
        client: "Nora Bennani",
        service: "Deep home cleaning",
        city: "Marrakech",
        date: "Apr 20, 2026",
        price: "$65",
        status: "completed",
        message: "Apartment cleaning after renovation.",
    },
    {
        id: "#ORD-1045",
        client: "Adam Wilson",
        service: "Bathroom maintenance",
        city: "Tangier",
        date: "Apr 18, 2026",
        price: "$95",
        status: "completed",
        message: "Replace faucet and check water pressure.",
    },
];

const statusStyles = {
    completed: {
        label: "Completed",
        className: "bg-emerald-50 text-emerald-600",
        icon: FiCheckCircle,
    },
    "in-progress": {
        label: "In Progress",
        className: "bg-sky-50 text-sky-600",
        icon: FiClock,
    },
    new: {
        label: "New",
        className: "bg-orange-50 text-[#ff781f]",
        icon: FiInbox,
    },
};

export default function RequestsList() {
    const [activeFilter, setActiveFilter] = useState("all");

    const visibleRequests = useMemo(() => {
        if (activeFilter === "all") {
            return requests;
        }

        return requests.filter((request) => request.status === activeFilter);
    }, [activeFilter]);

    return (
        <section className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-950">Service Requests</h2>
                    <p className="mt-1 text-sm font-medium text-slate-500">Track new orders and ongoing work.</p>
                </div>

                <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-50 p-2">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.value;

                        return (
                            <button
                                key={filter.value}
                                type="button"
                                onClick={() => setActiveFilter(filter.value)}
                                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                                    isActive
                                        ? "bg-[#ff781f] text-white shadow-sm"
                                        : "text-slate-500 hover:bg-white hover:text-slate-900"
                                }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 space-y-3">
                {visibleRequests.map((request) => {
                    const status = statusStyles[request.status];
                    const StatusIcon = status.icon;

                    return (
                        <article
                            key={request.id}
                            className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 transition hover:border-orange-100 hover:bg-white hover:shadow-sm xl:flex-row xl:items-center xl:justify-between"
                        >
                            <div className="flex min-w-0 gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
                                    <FiUser className="h-5 w-5" />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                        <h3 className="text-base font-bold text-slate-950">{request.service}</h3>
                                        <span className="text-xs font-semibold text-slate-400">{request.id}</span>
                                    </div>

                                    <p className="mt-1 text-sm font-medium text-slate-600">{request.client}</p>
                                    <p className="mt-2 line-clamp-1 text-sm text-slate-400">{request.message}</p>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3 xl:w-[460px] xl:items-center">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                                    <FiMapPin className="h-4 w-4 text-slate-400" />
                                    <span>{request.city}</span>
                                </div>

                                <div className="text-sm font-semibold text-slate-500">{request.date}</div>

                                <div className="flex items-center justify-between gap-3 sm:justify-end">
                                    <span className="text-base font-bold text-slate-950">{request.price}</span>
                                    <span className={`flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${status.className}`}>
                                        <StatusIcon className="h-3.5 w-3.5" />
                                        {status.label}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="flex h-10 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-[#ff781f] hover:text-white xl:w-auto"
                            >
                                <FiMessageCircle className="h-4 w-4" />
                                Details
                            </button>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
