import AdminDashboardScreen from "../../components/Admin/Dashboard/AdminDashboardScreen";
import AdminLayout from "../../components/Admin/Shared/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout title="Admin dashboard">
            <AdminDashboardScreen />
        </AdminLayout>
    );
}
