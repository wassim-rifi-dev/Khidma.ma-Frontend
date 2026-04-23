import RequestsHeader from "../../components/Professional/Requests/RequestsHeader";
import RequestsList from "../../components/Professional/Requests/RequestsList";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";

export default function Requests() {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-24 lg:px-12">
                <RequestsHeader />
                <RequestsList />
                <ProfessionalFooter />
            </section>
        </main>
    );
}
