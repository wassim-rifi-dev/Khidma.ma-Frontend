import ReviewCard from "./Reviews/ReviewCard";
import ReviewsEmptyState from "./Reviews/ReviewsEmptyState";
import ReviewsHero from "./Reviews/ReviewsHero";

export default function ProfessionalReviewsList({ profile, isLoading, error }) {
    if (isLoading) {
        return (
            <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
                    Loading reviews...
                </div>
            </section>
        );
    }

    if (error || !profile) {
        return (
            <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 text-center text-sm text-red-500 shadow-sm">
                    {error || "Professional reviews not found."}
                </div>
            </section>
        );
    }

    const { professional, reviews, reviewCount } = profile;
    const averageRating = Number(professional.rating || 0).toFixed(1);

    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <ReviewsHero
                    professionalId={professional.id}
                    professionalName={professional.user?.name}
                    averageRating={averageRating}
                    reviewCount={reviewCount}
                    city={professional.city}
                />

                <div className="mt-8 space-y-4">
                    {reviews.length === 0 ? (
                        <ReviewsEmptyState>No customer reviews yet.</ReviewsEmptyState>
                    ) : (
                        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
                    )}
                </div>
            </div>
        </section>
    );
}
