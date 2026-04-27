import { FiCheckCircle, FiMessageCircle, FiTool, FiUsers } from "react-icons/fi";

const icons = {
    price: FiTool,
    requests: FiUsers,
    completed: FiCheckCircle,
    reviews: FiMessageCircle,
};

export default function ServiceStats({ stats }) {
    return (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, iconKey }) => {
                const Icon = icons[iconKey];

                return (
                    <article key={label} className="rounded-[22px] border border-slate-100 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-sm font-medium text-slate-500">{label}</span>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                                <Icon className="h-5 w-5" />
                            </span>
                        </div>
                        <p className="mt-4 text-3xl font-bold text-slate-900">{value}</p>
                    </article>
                );
            })}
        </div>
    );
}
