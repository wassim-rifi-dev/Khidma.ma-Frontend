import {
    FiArrowUpRight,
    FiBriefcase,
    FiStar,
    FiTool,
} from "react-icons/fi";

export default function ServicesSummary({ summary }) {
    const summaryItems = [
        { label: "Published services", value: summary.published_services, icon: FiBriefcase },
        { label: "Priced offers", value: summary.priced_offers, icon: FiTool },
        { label: "Categories", value: summary.categories, icon: FiArrowUpRight },
        { label: "Average rating", value: summary.average_rating.toFixed(1), icon: FiStar },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryItems.map(({ label, value, icon: Icon }) => (
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
