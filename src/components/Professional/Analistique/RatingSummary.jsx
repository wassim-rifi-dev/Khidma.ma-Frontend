import { FiStar } from "react-icons/fi";

const ratings = [
    { score: 5, percentage: 90 },
    { score: 4, percentage: 72 },
    { score: 3, percentage: 2 },
    { score: 2, percentage: 0 },
    { score: 1, percentage: 0 },
];

export default function RatingSummary() {
    return (
        <section className="flex min-h-64 items-center gap-12 rounded-[28px] bg-white p-8 shadow-sm">
            <div className="min-w-40 text-center">
                <p className="text-5xl font-bold text-slate-950">4.9</p>
                <div className="mt-4 flex justify-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FiStar key={index} className="h-5 w-5 fill-current" />
                    ))}
                </div>
                <p className="mt-2 text-sm font-medium text-stone-600">Based on 86 reviews</p>
            </div>

            <div className="flex-1 space-y-4">
                {ratings.map((rating) => (
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
