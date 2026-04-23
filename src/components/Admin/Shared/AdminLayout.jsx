import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children, title = "Admin dashboard" }) {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <AdminSidebar />

            <div className="ml-60">
                <AdminHeader title={title} />

                <section className="px-8 pb-8 pt-28 lg:px-12">
                    {children}
                </section>
            </div>
        </main>
    );
}
