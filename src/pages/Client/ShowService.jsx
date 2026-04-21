import Header from "../../components/Client/Home/Header";
import Hero from "../../components/Client/Home/Hero";
import PopularServices from "../../components/Client/Home/PopularServices";
import TopProfessional from "../../components/Client/Home/TopProfessional";
import MyRequest from "../../components/Client/Home/MyRequest";
import Footer from "../../components/Landing/Footer";
import Main from "../../components/Client/Services/ShowService/Main";

export default function ShowService({isDark , toogleDark}) {
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