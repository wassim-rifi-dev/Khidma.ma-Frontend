import Header from "../../components/Client/Home/Header";
import Main from "../../components/Client/Profile/Main";
import Picture from "../../components/Client/Profile/Picture";
import Footer from "../../components/Landing/Footer";

export default function Profile({ isDark, toogleDark }) {
    return (
        <div className="min-h-screen w-full bg-[#f6f5f3] transition-colors duration-300">
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mx-auto mt-18 w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-y-5">
                <Picture />
                <Main />
            </main>

            <Footer />
        </div>
    );
}
