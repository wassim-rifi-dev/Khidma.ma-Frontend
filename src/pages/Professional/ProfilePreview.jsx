import { useEffect, useState } from "react";
import AboutActivitySection from "../../components/Professional/Profile/sections/AboutActivitySection";
import MyServicesSection from "../../components/Professional/Profile/sections/MyServicesSection";
import ProfilePictureCard from "../../components/Professional/Profile/sections/ProfilePictureCard";
import RecentReviewsSection from "../../components/Professional/Profile/sections/RecentReviewsSection";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";
import LoadingScreen from "../../components/ui/LoadingScreen";
import { getMyProfessionalProfile } from "../../services/ProfessionalServices";

export default function ProfilePreview() {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProfile() {
            try {
                const response = await getMyProfessionalProfile();
                setProfile(response.data);
            } catch (err) {
                setError(err?.message || "Unable to load professional profile.");
            } finally {
                setIsLoading(false);
            }
        }

        loadProfile();
    }, []);

    const user = profile?.user;
    const professional = profile?.professional;
    const services = professional?.services || [];
    const recentReviews = professional?.recent_reviews || [];

    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-24 lg:px-12">
                {isLoading ? (
                    <LoadingScreen
                        title="Loading professional dashboard"
                        subtitle="We are getting your services, activity, and reviews."
                    />
                ) : error ? (
                    <div className="mx-auto mt-10 max-w-6xl rounded-[30px] bg-white p-8 text-center text-sm font-medium text-red-500 shadow-sm">
                        {error}
                    </div>
                ) : (
                    <>
                        <ProfilePictureCard user={user} professional={professional} />
                        <AboutActivitySection professional={professional} />
                        <MyServicesSection services={services} />
                        <RecentReviewsSection
                            reviews={recentReviews}
                            reviewsCount={professional?.reviews_count || 0}
                        />
                    </>
                )}
            </section>
        </main>
    );
}
