import BecomeAProfessional from "../components/Landing/BecomeAProfessional";
import FeaturedProfessionals from "../components/Landing/FeaturedProfessionals";
import Header from "../components/Landing/Header";
import Hero from "../components/Landing/Hero";
import HowItWork from "../components/Landing/HowItWork";
import PopularServices from "../components/Landing/PopularServices";
import WhyChooseKhidma from "../components/Landing/WhyChooseKhidma";

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
        </div>
    )
}