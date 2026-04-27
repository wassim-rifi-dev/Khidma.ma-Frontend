import Header from "./Header";
import SideBar from "./SideBar";
import ChatFlow from "../../../chat/components";

export default function ProfessionalLayout({ children, contentClassName = "pt-28", title = "Manage your services" }) {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <ChatFlow />
            <SideBar />
            <Header withSidebar title={title} />

            <section className={`px-4 pb-8 sm:px-6 lg:ml-60 lg:px-12 ${contentClassName}`}>
                {children}
            </section>
        </main>
    );
}
