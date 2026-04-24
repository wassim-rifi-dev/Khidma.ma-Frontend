import ProfileOverview from "../../components/Client/Profile/ProfileOverview";
import ProfilePictureCard from "../../components/Client/Profile/ProfilePictureCard";
import ClientLayout from "../../components/Client/Shared/ClientLayout";

export default function Profile({ isDark, toogleDark }) {
    return (
        <ClientLayout
            isDark={isDark}
            toogleDark={toogleDark}
            className="min-h-screen w-full bg-[#f6f5f3] transition-colors duration-300"
            mainClassName="mx-auto mt-18 flex w-full max-w-7xl flex-col gap-y-5 px-4 py-8 sm:px-6 lg:px-8"
        >
                <ProfilePictureCard />
                <ProfileOverview />
        </ClientLayout>
    );
}
