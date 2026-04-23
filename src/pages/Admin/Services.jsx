import AdminServicesManagement from "../../components/Admin/Services/AdminServicesManagement";
import AdminLayout from "../../components/Admin/Shared/AdminLayout";

export default function Services() {
    return (
        <AdminLayout title="Services management">
            <AdminServicesManagement />
        </AdminLayout>
    );
}
