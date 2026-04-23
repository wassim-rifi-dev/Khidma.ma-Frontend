import AboutActivitySection from "../../components/Professional/Profile/sections/AboutActivitySection";
import MyServicesSection from "../../components/Professional/Profile/sections/MyServicesSection";
import ProfilePictureCard from "../../components/Professional/Profile/sections/ProfilePictureCard";
import RecentReviewsSection from "../../components/Professional/Profile/sections/RecentReviewsSection";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

const profile = {
    user: {
        name: "Yassine El Amrani",
        first_name: "Yassine",
        last_name: "El Amrani",
        photo: null,
    },
    professional: {
        id: "preview",
        city: "Casablanca",
        rating: 4.8,
        reviews_count: 36,
        requests_count: 128,
        completed_requests_count: 94,
        description:
            "Experienced home maintenance professional focused on clean finishes, reliable timing, and practical solutions for everyday repairs.",
        category: { name: "Home Maintenance" },
        services: [
            {
                id: "plumbing-preview",
                title: "Kitchen Plumbing Repair",
                description: "Leak inspection, faucet replacement, sink repair, and quick pipe maintenance for kitchens.",
                price_min: 150,
                price_max: 350,
                rating: 4.9,
                category: { name: "Plumbing" },
            },
            {
                id: "electrical-preview",
                title: "Lighting Installation",
                description: "Install ceiling lights, wall fixtures, switches, and safe wiring for small home upgrades.",
                price_min: 200,
                price_max: 500,
                rating: 4.7,
                category: { name: "Electrical" },
            },
        ],
        recent_reviews: [
            {
                id: "review-1",
                rating: 5,
                comment: "Very clean work and arrived exactly on time. The sink problem was fixed quickly.",
                created_at: "2026-04-20",
                client: { name: "Fatima Z." },
            },
            {
                id: "review-2",
                rating: 5,
                comment: "Professional service, clear price, and good communication before the visit.",
                created_at: "2026-04-18",
                client: { name: "Omar B." },
            },
        ],
    },
};

export default function ProfilePreview() {
    const user = profile?.user;
    const professional = profile?.professional;
    const services = professional?.services || [];
    const recentReviews = professional?.recent_reviews || [];

    return (
        <ProfessionalLayout contentClassName="pt-24" title="Profile preview">
            <ProfilePictureCard user={user} professional={professional} />
            <AboutActivitySection professional={professional} />
            <MyServicesSection services={services} />
            <RecentReviewsSection
                reviews={recentReviews}
                reviewsCount={professional?.reviews_count || 0}
            />
        </ProfessionalLayout>
    );
}
