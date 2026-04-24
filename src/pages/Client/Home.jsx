import HeroSection from "../../components/Client/Dashboard/HeroSection";
import PopularServicesSection from "../../components/Client/Dashboard/PopularServicesSection";
import TopProfessionalsSection from "../../components/Client/Dashboard/TopProfessionalsSection";
import MyRequestsSection from "../../components/Client/Dashboard/MyRequestsSection";
import ClientLayout from "../../components/Client/Shared/ClientLayout";

export default function Home({isDark , toogleDark}) {
    return (
        <ClientLayout isDark={isDark} toogleDark={toogleDark}>
            <HeroSection />
            <PopularServicesSection />
            <TopProfessionalsSection />
            <MyRequestsSection />
        </ClientLayout>
    )
}
