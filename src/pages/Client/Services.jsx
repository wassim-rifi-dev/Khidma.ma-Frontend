import Header from "../../components/Client/Home/Header";
import Main from "../../components/Client/Services/Main";
import Footer from "../../components/Landing/Footer";

export default function Services({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <Main />
            </main>

            <Footer />
        </div>
    )
}
