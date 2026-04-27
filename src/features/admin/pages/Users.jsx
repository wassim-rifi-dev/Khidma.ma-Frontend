import AdminUsersManagement from "../components/Users/AdminUsersManagement";
import AdminLayout from "../components/Shared/AdminLayout";

export default function Users() {
    return (
        <AdminLayout title="Users management">
            <AdminUsersManagement />
        </AdminLayout>
    );
}
