import AdminCategoriesManagement from "../../components/Admin/Categories/AdminCategoriesManagement";
import AdminLayout from "../../components/Admin/Shared/AdminLayout";

export default function Categories() {
    return (
        <AdminLayout title="Categories management">
            <AdminCategoriesManagement />
        </AdminLayout>
    );
}
