import AdminDashboard from "../../components/Admin/Dashboard/AdminDashboard";
import AdminLayout from "../../components/Admin/Shared/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout title="Admin dashboard">
            <AdminDashboard />
        </AdminLayout>
    );
}
