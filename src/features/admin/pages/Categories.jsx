import AdminCategoriesManagement from "../components/Categories/AdminCategoriesManagement";
import AdminLayout from "../components/Shared/AdminLayout";

export default function Categories() {
    return (
        <AdminLayout title="Categories management">
            <AdminCategoriesManagement />
        </AdminLayout>
    );
}
