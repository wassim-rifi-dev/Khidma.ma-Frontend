import { FiMapPin, FiMessageSquare } from "react-icons/fi";
import ReviewStars from "./ReviewStars";

export default function ReviewCard({ review }) {
    return (
        <article className="rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                    {review.avatar ? (
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe8fb] text-sm font-semibold text-slate-600">
                            {review.avatarLetter}
                        </div>
                    )}

                    <div>
                        <p className="text-base font-semibold text-slate-900">{review.name}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                            <span className="inline-flex items-center gap-1">
                                <FiMapPin className="h-3.5 w-3.5" />
                                {review.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <FiMessageSquare className="h-3.5 w-3.5" />
                                {review.time}
                            </span>
                        </div>
                    </div>
                </div>

                <ReviewStars rating={Math.round(review.rating || 0)} />
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {review.text}
            </p>
        </article>
    );
}
