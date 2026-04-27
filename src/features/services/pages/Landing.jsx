import BecomeAProfessional from "../components/BecomeAProfessional";
import FeaturedProfessionals from "../components/FeaturedProfessionals";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWork from "../components/HowItWork";
import PopularServices from "../components/PopularServices";
import WhyChooseKhidma from "../components/WhyChooseKhidma";

export default function Landing({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
        }`}>
            <Header isDark={isDark} toogleDark={toogleDark} />
            
            <main className="mt-18">
                <Hero isDark={isDark} />
                <PopularServices isDark={isDark} />
                <HowItWork isDark={isDark} />
                <FeaturedProfessionals isDark={isDark} />
                <WhyChooseKhidma isDark={isDark} />
                <BecomeAProfessional />
            </main>

            <Footer />
        </div>
    )
}