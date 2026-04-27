import { FiCalendar, FiChevronDown } from "react-icons/fi";

export default function AnalyticsHeader() {
    return (
        <div className="mb-8 flex min-h-40 items-center justify-between gap-5 rounded-2xl bg-linear-to-r from-slate-100 via-white to-orange-50 px-8 py-6 shadow-sm">
            <div>
                <h1 className="text-4xl font-bold text-slate-900">Analytics</h1>
                <p className="mt-2 text-base font-medium text-slate-600">Track your performance and growth</p>
            </div>

            <button
                type="button"
                className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
                <FiCalendar className="h-4 w-4" />
                <span>Last 30 Days</span>
                <FiChevronDown className="h-4 w-4" />
            </button>
        </div>
    );
}

