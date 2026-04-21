import Header from "../../components/Client/Home/Header";
import Main from "../../components/Client/Profile/Main";
import Picture from "../../components/Client/Profile/Picture";
import Footer from "../../components/Landing/Footer";

export default function Profile({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white flex items-center justify-center flex-col w-full`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <Picture />
                <Main />
            </main>

            <Footer />
        </div>
    )
}