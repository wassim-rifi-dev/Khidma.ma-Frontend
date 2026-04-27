import ServicesExplorer from "../components/Services/ServicesExplorer";
import ClientLayout from "../components/Shared/ClientLayout";

export default function Services({isDark , toogleDark}) {
    return (
        <ClientLayout isDark={isDark} toogleDark={toogleDark}>
            <ServicesExplorer />
        </ClientLayout>
    )
}
