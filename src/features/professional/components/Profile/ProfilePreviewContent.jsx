import AboutActivitySection from "./sections/AboutActivitySection";
import MyServicesSection from "./sections/MyServicesSection";
import ProfilePictureCard from "./sections/ProfilePictureCard";
import RecentReviewsSection from "./sections/RecentReviewsSection";
import ProfessionalStateCard from "../Shared/ProfessionalStateCard";

export default function ProfilePreviewContent({ user, professional, isLoading, error }) {
    const services = professional?.services || [];
    const recentReviews = professional?.recent_reviews || [];

    if (isLoading) {
        return <ProfessionalStateCard>Loading your profile preview...</ProfessionalStateCard>;
    }

    if (error) {
        return <ProfessionalStateCard tone="error">{error}</ProfessionalStateCard>;
    }

    if (!professional) {
        return null;
    }

    return (
        <>
            <ProfilePictureCard user={user} professional={professional} />
            <AboutActivitySection professional={professional} />
            <MyServicesSection services={services} />
            <RecentReviewsSection
                reviews={recentReviews}
                reviewsCount={professional?.reviews_count || 0}
            />
        </>
    );
}
