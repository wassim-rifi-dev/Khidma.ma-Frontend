import AnalyticsHeader from "../../components/Professional/Analistique/AnalyticsHeader";
import AnalyticsStats from "../../components/Professional/Analistique/AnalyticsStats";
import RequestsOverTimeChart from "../../components/Professional/Analistique/RequestsOverTimeChart";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";

export default function Analistique() {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-28 lg:px-12">
                <AnalyticsHeader />
                <AnalyticsStats />
                <RequestsOverTimeChart />
            </section>
        </main>
    );
}
