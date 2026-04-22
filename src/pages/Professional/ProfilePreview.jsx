import AboutActivitySection from "../../components/Professional/Profile/sections/AboutActivitySection";
import MyServicesSection from "../../components/Professional/Profile/sections/MyServicesSection";
import ProfilePictureCard from "../../components/Professional/Profile/sections/ProfilePictureCard";
import RecentReviewsSection from "../../components/Professional/Profile/sections/RecentReviewsSection";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";

export default function ProfilePreview() {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-24 lg:px-12">
                <ProfilePictureCard />
                <AboutActivitySection />
                <MyServicesSection />
                <RecentReviewsSection />
            </section>
        </main>
    );
}
