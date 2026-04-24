import ServicesExplorer from "../../components/Client/Services/ServicesExplorer";
import ClientLayout from "../../components/Client/Shared/ClientLayout";

export default function Services({isDark , toogleDark}) {
    return (
        <ClientLayout isDark={isDark} toogleDark={toogleDark}>
            <ServicesExplorer />
        </ClientLayout>
    )
}
