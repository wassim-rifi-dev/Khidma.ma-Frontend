import { useEffect, useState } from "react";
import { FiStar, FiX } from "react-icons/fi";
import { createReview } from "../../../services/RequestServices";

function StarButton({ active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                active
                    ? "border-orange-200 bg-orange-50 text-orange-500"
                    : "border-slate-200 bg-white text-slate-300 hover:border-orange-100 hover:text-orange-400"
            }`}
        >
            <FiStar className={`h-5 w-5 ${active ? "fill-current" : ""}`} />
        </button>
    );
}

export default function ReviewRequestModal({ request, isOpen, onClose, onCreated }) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        setRating(5);
        setComment("");
        setError("");
    }, [isOpen, request?.id]);

    if (!isOpen || !request) {
        return null;
    }

    const serviceTitle = request.service?.title || "this service";
    const professionalName = request.service?.professional?.user?.name || "the professional";

    async function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const response = await createReview(request.id, {
                rating,
                comment: comment.trim(),
            });

            onCreated?.(response.data?.review || null);
            window.dispatchEvent(new Event("client-review-created"));
            onClose?.();
        } catch (requestError) {
            setError(requestError?.message || "Unable to save your review.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6">
            <div className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.2)]">
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
                        <div className="mt-3 flex flex-wrap gap-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <StarButton
                                    key={value}
                                    active={value <= rating}
                                    onClick={() => setRating(value)}
                                />
                            ))}
                        </div>
                    </div>

                    <label className="block">
                        <span className="text-sm font-semibold text-slate-900">Comment</span>
                        <textarea
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            rows={5}
                            placeholder="Tell others how the service went..."
                            className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-orange-200 focus:bg-white focus:ring-4 focus:ring-orange-50"
                        />
                    </label>

                    {error ? (
                        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-500">
                            {error}
                        </div>
                    ) : null}

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
                        >
                            {isSubmitting ? "Sending..." : "Submit Review"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
