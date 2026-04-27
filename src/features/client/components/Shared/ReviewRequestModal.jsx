import { useEffect, useState } from "react";
import { FiStar, FiX } from "react-icons/fi";
import { createReview } from "../../../services/services/RequestServices";

function StarButton({ active, onClick, onMouseEnter }) {
    return (
        <button
            type="button"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            className={`flex h-10 w-10 items-center justify-center transition ${
                active
                    ? "text-orange-500"
                    : "text-slate-300 hover:text-orange-400"
            }`}
            aria-label="Set rating star"
        >
            <FiStar className={`h-7 w-7 ${active ? "fill-current" : ""}`} />
        </button>
    );
}

export default function ReviewRequestModal({ request, isOpen, onClose, onCreated }) {
    const [rating, setRating] = useState(5);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        setRating(5);
        setHoveredRating(0);
        setComment("");
        setIsSuccess(false);
        setError("");
    }, [isOpen, request?.id]);

    if (!isOpen || !request) {
        return null;
    }

    const serviceTitle = request.service?.title || "this service";
    const professionalName = request.service?.professional?.user?.name || "the professional";
    const activeRating = hoveredRating || rating;

    async function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        if (!rating) {
            setError("Please choose a star rating.");
            return;
        }

        if (!comment.trim()) {
            setError("Please add a short comment about your experience.");
            return;
        }

        setIsSubmitting(true);
        setIsSuccess(false);
        setError("");

        try {
            const response = await createReview(request.id, {
                rating,
                comment: comment.trim(),
            });

            const review = response.data?.review || null;

            setIsSuccess(true);
            onCreated?.(response.data?.review || null);
            window.dispatchEvent(new CustomEvent("client-review-created", {
                detail: {
                    review,
                    serviceId: request.service?.id || null,
                    professionalId: request.service?.professional?.id || null,
                    orderId: request.id,
                },
            }));

            window.setTimeout(() => {
                onClose?.();
            }, 900);
        } catch (requestError) {
            setError(requestError?.message || "Unable to save your review.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.2)]">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold text-orange-500">Completed Request</p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-900">Leave a Review</h2>
                        <p className="mt-2 text-sm text-slate-500">
                            Share your experience with {professionalName} for {serviceTitle}.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                    >
                        <FiX className="h-4 w-4" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                        <p className="text-sm font-semibold text-slate-900">Your rating</p>
                        <p className="mt-1 text-xs text-slate-400">
                            Pick from 1 to 5 stars.
                        </p>
                        <div
                            className="mt-3 flex flex-wrap gap-2"
                            onMouseLeave={() => setHoveredRating(0)}
                        >
                            {[1, 2, 3, 4, 5].map((value) => (
                                <StarButton
                                    key={value}
                                    active={value <= activeRating}
                                    onClick={() => setRating(value)}
                                    onMouseEnter={() => setHoveredRating(value)}
                                />
                            ))}
                        </div>
                        <p className="mt-2 text-sm font-medium text-orange-500">
                            {rating}/5 stars
                        </p>
                    </div>

                    <label className="block">
                        <span className="text-sm font-semibold text-slate-900">Comment</span>
                        <textarea
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            rows={5}
                            placeholder="Tell others how the service went..."
                            className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-orange-200 focus:bg-white focus:ring-4 focus:ring-orange-50"
                            maxLength={500}
                        />
                        <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                            <span>Share what went well and how the professional handled the job.</span>
                            <span>{comment.trim().length}/500</span>
                        </div>
                    </label>

                    {error ? (
                        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-500">
                            {error}
                        </div>
                    ) : null}

                    {isSuccess ? (
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
                            Review submitted successfully.
                        </div>
                    ) : null}

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
                        >
                            {isSubmitting ? "Submitting..." : isSuccess ? "Review Submitted" : "Submit Review"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

