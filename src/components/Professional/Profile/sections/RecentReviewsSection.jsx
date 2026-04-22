import { FiStar } from "react-icons/fi";

const reviews = [
    {
        name: "Khalid B.",
        time: "2 days ago",
        rating: 5,
        avatar: "K",
        text: "Ahmed was incredibly fast and professional. He fixed a major leak in our kitchen under an hour and left the place spotless. Highly recommended for any emergency plumbing needs in Maarif.",
    },
    {
        name: "Sara E.",
        time: "1 week ago",
        rating: 4,
        avatar: "S",
        text: "Good service overall. The diagnostic was thorough, though the parts took a day to arrive. The final installation of the new boiler is working perfectly.",
    },
];

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

export default function RecentReviewsSection() {
    return (
        <section className="mx-auto mt-8 w-full max-w-6xl">
            <h2 className="text-2xl font-bold text-slate-900">Recent Reviews</h2>

            <div className="mt-6 space-y-5">
                {reviews.map(({ name, time, rating, avatar, text }) => (
                    <article
                        key={name}
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
                                    <span className="text-sm font-medium text-slate-500">{time}</span>
                                </div>

                                <div className="mt-2">
                                    <RatingStars rating={rating} />
                                </div>

                                <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
                                    "{text}"
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-5 text-center">
                <button
                    type="button"
                    className="text-base font-semibold text-[#A34E0D] transition hover:text-orange-600"
                >
                    View all 124 reviews
                </button>
            </div>
        </section>
    );
}
