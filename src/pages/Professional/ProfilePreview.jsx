import { useEffect, useState } from "react";
import AboutActivitySection from "../../components/Professional/Profile/sections/AboutActivitySection";
import MyServicesSection from "../../components/Professional/Profile/sections/MyServicesSection";
import ProfilePictureCard from "../../components/Professional/Profile/sections/ProfilePictureCard";
import RecentReviewsSection from "../../components/Professional/Profile/sections/RecentReviewsSection";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";
import { getMyProfessionalProfile } from "../../services/ProfessionalServices";

export default function ProfilePreview() {
    const [user, setUser] = useState(null);
    const [professional, setProfessional] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function fetchProfile() {
            setIsLoading(true);
            setError("");

            try {
                const response = await getMyProfessionalProfile();

                if (!isMounted) {
                    return;
                }

                setUser(response?.data?.user || null);
                setProfessional(response?.data?.professional || null);
            } catch (requestError) {
                if (!isMounted) {
                    return;
                }

                setUser(null);
                setProfessional(null);
                setError(requestError?.message || "Unable to load your profile preview.");
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetchProfile();

        return () => {
            isMounted = false;
        };
    }, []);

    const services = professional?.services || [];
    const recentReviews = professional?.recent_reviews || [];

    return (
        <ProfessionalLayout contentClassName="pt-24" title="Profile preview">
            {isLoading ? (
                <section className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-slate-100 bg-white p-8 text-center text-slate-500 shadow-sm">
                    Loading your profile preview...
                </section>
            ) : null}

            {!isLoading && error ? (
                <section className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-red-100 bg-red-50 p-8 text-center text-red-600 shadow-sm">
                    {error}
                </section>
            ) : null}

            {!isLoading && !error && professional ? (
                <>
                    <ProfilePictureCard user={user} professional={professional} />
                    <AboutActivitySection professional={professional} />
                    <MyServicesSection services={services} />
                    <RecentReviewsSection
                        reviews={recentReviews}
                        reviewsCount={professional?.reviews_count || 0}
                    />
                </>
            ) : null}
        </ProfessionalLayout>
    );
}
