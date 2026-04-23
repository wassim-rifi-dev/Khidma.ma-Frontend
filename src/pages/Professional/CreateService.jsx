import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";

export default function CreateService() {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-28 lg:px-12"></section>
        </main>
    );
}
