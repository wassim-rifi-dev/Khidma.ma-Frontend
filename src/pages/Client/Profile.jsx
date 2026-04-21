import Header from "../../components/Client/Shared/ClientHeader";
import ProfileOverview from "../../components/Client/Profile/ProfileOverview";
import ProfilePictureCard from "../../components/Client/Profile/ProfilePictureCard";
import Footer from "../../components/Landing/Footer";

export default function Profile({ isDark, toogleDark }) {
    return (
        <div className="min-h-screen w-full bg-[#f6f5f3] transition-colors duration-300">
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mx-auto mt-18 w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-y-5">
                <ProfilePictureCard />
                <ProfileOverview />
            </main>

            <Footer />
        </div>
    );
}
