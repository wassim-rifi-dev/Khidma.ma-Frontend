import AnalyticsHeader from "../../components/Professional/Analistique/AnalyticsHeader";
import AnalyticsStats from "../../components/Professional/Analistique/AnalyticsStats";
import PerformanceTip from "../../components/Professional/Analistique/PerformanceTip";
import RatingSummary from "../../components/Professional/Analistique/RatingSummary";
import RequestsOverTimeChart from "../../components/Professional/Analistique/RequestsOverTimeChart";
import RequestsStatusChart from "../../components/Professional/Analistique/RequestsStatusChart";
import TopPerformingServices from "../../components/Professional/Analistique/TopPerformingServices";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";

export default function Analistique() {
    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-28 lg:px-12">
                <AnalyticsHeader />
                <AnalyticsStats />
                <RequestsOverTimeChart />
                <div className="mt-6 grid gap-8 xl:grid-cols-2">
                    <RequestsStatusChart />
                    <TopPerformingServices />
                </div>
                <div className="mt-6 grid gap-8 xl:grid-cols-2">
                    <RatingSummary />
                    <PerformanceTip />
                </div>
                <ProfessionalFooter />
            </section>
        </main>
    );
}
