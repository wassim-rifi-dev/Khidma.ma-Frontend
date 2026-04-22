import { useParams } from "react-router-dom";
import Header from "../../components/Client/Shared/ClientHeader";
import Footer from "../../components/Landing/Footer";
import ServiceDetails from "../../components/Client/Services/ServiceDetails";
import useServiceDetails from "../../hooks/useServiceDetails";

export default function ShowService({isDark , toogleDark}) {
    const { serviceId } = useParams();
    const { details, isLoading, error } = useServiceDetails(serviceId);

    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <ServiceDetails details={details} isLoading={isLoading} error={error} />
            </main>

            <Footer />
        </div>
    )
}
