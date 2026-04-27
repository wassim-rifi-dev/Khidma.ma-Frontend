import AdminProfessionalsManagement from "../components/Professionals/AdminProfessionalsManagement";
import AdminLayout from "../components/Shared/AdminLayout";

export default function Professionals() {
    return (
        <AdminLayout title="Professionals management">
            <AdminProfessionalsManagement />
        </AdminLayout>
    );
}
