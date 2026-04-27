import { FiStar } from "react-icons/fi";

export default function RatingSummary({ summary }) {
    return (
        <section className="flex min-h-64 items-center gap-12 rounded-2xl bg-white p-8 shadow-sm">
            <div className="min-w-40 text-center">
                <p className="text-5xl font-bold text-slate-950">{summary.average}</p>
                <div className="mt-4 flex justify-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FiStar key={index} className="h-5 w-5 fill-current" />
                    ))}
                </div>
                <p className="mt-2 text-sm font-medium text-stone-600">{summary.reviewsLabel}</p>
            </div>

            <div className="flex-1 space-y-4">
                {summary.ratings.map((rating) => (
                    <div key={rating.score} className="grid grid-cols-[1.5rem_1rem_1fr] items-center gap-2">
                        <span className="text-sm font-medium text-stone-600">{rating.score}</span>
                        <FiStar className="h-4 w-4 fill-current text-amber-400" />
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-amber-400"
                                style={{ width: `${rating.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

