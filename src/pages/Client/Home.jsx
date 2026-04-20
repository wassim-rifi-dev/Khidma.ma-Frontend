import { useContext, useEffect } from "react";
import Header from "../../components/Client/Home/Header";
import { AuthContext } from "../../context/AuthContext";
import Hero from "../../components/Client/Home/Hero";
import PopularServices from "../../components/Client/Home/PopularServices";
import TopProfessional from "../../components/Client/Home/TopProfessional";
import MyRequest from "../../components/Client/Home/MyRequest";
import Footer from "../../components/Landing/Footer";

export default function Home({isDark , toogleDark}) {
    const { user } = useContext(AuthContext);

    useEffect(() => {
            console.log(user);
        }, [user]);

    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <Hero />
                <PopularServices />
                <TopProfessional />
                <MyRequest />
            </main>

            <Footer />
        </div>
    )
}