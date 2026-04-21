import { FiGrid, FiHome, FiTool, FiWind, FiZap } from "react-icons/fi";

export default function RecentRequestsCard() {
    const requests = [
        {
            icon: FiTool,
            title: "Plumbing Emergency",
            date: "Oct 24, 2023",
            sub: "Kitchen Leak",
            status: "COMPLETED",
            statusStyle: "bg-green-100 text-green-600",
        },
        {
            icon: FiWind,
            title: "AC Yearly Repair",
            date: "Oct 21, 2023",
            sub: "Maintenance",
            status: "IN PROGRESS",
            statusStyle: "bg-blue-100 text-blue-600",
        },
        {
            icon: FiZap,
            title: "Electrical Wiring",
            date: "Oct 19, 2023",
            sub: "Living Room",
            status: "NEW",
            statusStyle: "bg-orange-100 text-orange-500",
        },
        {
            icon: FiHome,
            title: "Deep Cleaning",
            date: "Oct 15, 2023",
            sub: "3-Bedroom Villa",
            status: "COMPLETED",
            statusStyle: "bg-green-100 text-green-600",
        },
        {
            icon: FiGrid,
            title: "Interior Painting",
            date: "Oct 10, 2023",
            sub: "Feature Wall",
            status: "COMPLETED",
            statusStyle: "bg-green-100 text-green-600",
        },
        {
            icon: FiGrid,
            title: "Interior Painting",
            date: "Oct 10, 2023",
            sub: "Feature Wall",
            status: "COMPLETED",
            statusStyle: "bg-green-100 text-green-600",
        },
    ];

    return (
        <section className="rounded-[28px] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
            <h2 className="mb-5 text-lg font-semibold text-slate-900">Recent Requests</h2>

            <div className="space-y-3">
                {requests.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={`${item.title}-${index}`}
                            className="flex flex-col gap-3 rounded-[22px] bg-[#f5f5f3] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
                                    <Icon className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                                    <p className="text-xs text-slate-400">
                                        {item.date} - {item.sub}
                                    </p>
                                </div>
                            </div>

                            <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${item.statusStyle}`}>
                                {item.status}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
