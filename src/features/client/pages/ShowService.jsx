import { useParams } from "react-router-dom";
import ServiceDetails from "../components/Services/ServiceDetails";
import useServiceDetails from "../../services/hooks/useServiceDetails";
import ClientLayout from "../components/Shared/ClientLayout";

export default function ShowService({isDark , toogleDark}) {
    const { serviceId } = useParams();
    const { details, isLoading, error } = useServiceDetails(serviceId);

    return (
        <ClientLayout isDark={isDark} toogleDark={toogleDark}>
            <ServiceDetails details={details} isLoading={isLoading} error={error} />
        </ClientLayout>
    )
}
