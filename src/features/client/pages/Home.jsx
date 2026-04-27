import HeroSection from "../components/Dashboard/HeroSection";
import PopularServicesSection from "../components/Dashboard/PopularServicesSection";
import TopProfessionalsSection from "../components/Dashboard/TopProfessionalsSection";
import MyRequestsSection from "../components/Dashboard/MyRequestsSection";
import ClientLayout from "../components/Shared/ClientLayout";

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
