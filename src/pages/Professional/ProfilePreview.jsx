import ProfilePictureCard from "../../components/Professional/Profile/sections/ProfilePictureCard";
import SideBar from "../../components/Professional/Shared/SideBar";

export default function ProfilePreview() {
    return (
        <main className="flex min-h-screen bg-[#f6f8fc]">
            <SideBar />

            <section className="flex-1 px-8 py-8 lg:px-12">
                <ProfilePictureCard />
            </section>
        </main>
    );
}
