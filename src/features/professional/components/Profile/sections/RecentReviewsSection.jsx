import { FiStar } from "react-icons/fi";

function formatReviewTime(date) {
    if (!date) {
        return "Recently";
    }

    const diffMs = new Date(date).getTime() - Date.now();
    const diffDays = Math.round(diffMs / 86400000);
    const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (Math.abs(diffDays) < 1) {
        return "today";
    }

    return formatter.format(diffDays, "day");
}

function RatingStars({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => {
                const filled = index < rating;

                return (
                    <FiStar
                        key={index}
                        className={`h-5 w-5 ${filled ? "fill-orange-500 text-orange-500" : "fill-slate-200 text-slate-200"}`}
                    />
                );
            })}
        </div>
    );
}

export default function RecentReviewsSection({ reviews = [], reviewsCount = 0 }) {
    return (
        <section className="mx-auto mt-8 w-full max-w-6xl">
            <h2 className="text-2xl font-bold text-slate-900">Recent Reviews</h2>

            <div className="mt-6 space-y-5">
                {reviews.length === 0 ? (
                    <article className="rounded-[22px] border border-slate-200 bg-white p-6 text-center text-slate-500 shadow-sm">
                        No reviews yet.
                    </article>
                ) : reviews.map((review) => {
                    const name = review.client?.name || "Client";
                    const avatar = name.charAt(0).toUpperCase();

                    return (
                    <article
                        key={review.id}
                        className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="flex gap-5">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-base font-semibold text-slate-600">
                                    {avatar}
                            </span>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                        <span className="text-sm font-medium text-slate-500">{formatReviewTime(review.created_at)}</span>
                                </div>

                                <div className="mt-2">
                                        <RatingStars rating={Math.round(review.rating || 0)} />
                                </div>

                                <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
                                        "{review.comment || "No comment provided."}"
                                </p>
                            </div>
                        </div>
                    </article>
                    );
                })}
            </div>

            {reviewsCount > 0 && (
                <div className="mt-5 text-center">
                <button
                    type="button"
                    className="text-base font-semibold text-[#A34E0D] transition hover:text-orange-600"
                >
                        View all {reviewsCount} reviews
                </button>
            </div>
            )}
        </section>
    );
}
