import Header from "../../components/Client/Shared/ClientHeader";
import Footer from "../../components/Landing/Footer";
import ServiceDetails from "../../components/Client/Services/ServiceDetails";

export default function ShowService({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <ServiceDetails />
            </main>

            <Footer />
        </div>
    )
}
