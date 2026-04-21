import Header from "../../components/Client/Shared/ClientHeader";
import HeroSection from "../../components/Client/Dashboard/HeroSection";
import PopularServicesSection from "../../components/Client/Dashboard/PopularServicesSection";
import TopProfessionalsSection from "../../components/Client/Dashboard/TopProfessionalsSection";
import MyRequestsSection from "../../components/Client/Dashboard/MyRequestsSection";
import Footer from "../../components/Landing/Footer";
import Index from "../../components/Chat/index";

export default function Home({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Index />
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <HeroSection />
                <PopularServicesSection />
                <TopProfessionalsSection />
                <MyRequestsSection />
            </main>

            <Footer />
        </div>
    )
}
