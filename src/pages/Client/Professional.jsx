import Header from "../../components/Client/Shared/ClientHeader";
import ProfessionalProfile from "../../components/Client/Professionals/ProfessionalProfile";
import Footer from "../../components/Landing/Footer";

export default function Professional({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <ProfessionalProfile />
            </main>

            <Footer />
        </div>
    )
}
