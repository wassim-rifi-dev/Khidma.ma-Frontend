import Header from "../../components/Client/Shared/ClientHeader";
import ServicesExplorer from "../../components/Client/Services/ServicesExplorer";
import Footer from "../../components/Landing/Footer";

export default function Services({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <ServicesExplorer />
            </main>

            <Footer />
        </div>
    )
}
