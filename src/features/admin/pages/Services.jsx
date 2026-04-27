import AdminServicesManagement from "../components/Services/AdminServicesManagement";
import AdminLayout from "../components/Shared/AdminLayout";

export default function Services() {
    return (
        <AdminLayout title="Services management">
            <AdminServicesManagement />
        </AdminLayout>
    );
}
