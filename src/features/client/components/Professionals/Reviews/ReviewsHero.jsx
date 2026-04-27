import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function SummaryCard({ label, value }) {
    return (
        <div className="rounded-2xl bg-slate-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {label}
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-2xl">{value}</p>
        </div>
    );
}

export default function ReviewsHero({ professionalId, professionalName, averageRating, reviewCount, city }) {
    return (
        <>
            <Link
                to={`/professional/${professionalId}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
            >
                <FiArrowLeft className="h-4 w-4" />
                Back to profile
            </Link>

            <div className="mt-5 rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                            Reviews List
                        </p>
                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            What clients say about {professionalName || "this professional"}
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            Browse all published feedback, ratings, and recent client experiences in one place.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                        <SummaryCard label="Average rating" value={averageRating} />
                        <SummaryCard label="Total reviews" value={reviewCount} />
                        <SummaryCard label="Service area" value={city || "Morocco"} />
                    </div>
                </div>
            </div>
        </>
    );
}
