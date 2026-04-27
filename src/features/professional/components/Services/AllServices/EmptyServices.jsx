import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function EmptyServices() {
    return (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
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

