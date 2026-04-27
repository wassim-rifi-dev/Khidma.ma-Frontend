import AdminDashboard from "../components/Dashboard/AdminDashboard";
import AdminLayout from "../components/Shared/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout title="Admin dashboard">
            <AdminDashboard />
        </AdminLayout>
    );
}
