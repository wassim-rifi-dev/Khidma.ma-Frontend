import AdminUsersManagement from "../../components/Admin/Users/AdminUsersManagement";
import AdminLayout from "../../components/Admin/Shared/AdminLayout";

export default function Users() {
    return (
        <AdminLayout title="Users management">
            <AdminUsersManagement />
        </AdminLayout>
    );
}
