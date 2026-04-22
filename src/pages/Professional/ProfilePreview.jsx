import ProfilePictureCard from "../../components/Professional/Profile/sections/ProfilePictureCard";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";

export default function ProfilePreview() {
    return (
        <main className="flex min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="flex-1 px-8 pb-8 pt-24 lg:px-12">
                <ProfilePictureCard />
            </section>
        </main>
    );
}
