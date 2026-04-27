import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children, title = "Admin dashboard" }) {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <AdminSidebar />

            <div className="lg:ml-60">
                <AdminHeader title={title} />

                <section className="px-4 pb-8 pt-28 sm:px-6 lg:px-12">
                    {children}
                </section>
            </div>
        </main>
    );
}
