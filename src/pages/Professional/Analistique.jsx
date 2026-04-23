import AnalyticsHeader from "../../components/Professional/Analistique/AnalyticsHeader";
import AnalyticsStats from "../../components/Professional/Analistique/AnalyticsStats";
import PerformanceTip from "../../components/Professional/Analistique/PerformanceTip";
import RatingSummary from "../../components/Professional/Analistique/RatingSummary";
import RequestsOverTimeChart from "../../components/Professional/Analistique/RequestsOverTimeChart";
import RequestsStatusChart from "../../components/Professional/Analistique/RequestsStatusChart";
import TopPerformingServices from "../../components/Professional/Analistique/TopPerformingServices";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function Analistique() {
    return (
        <ProfessionalLayout title="Analytics overview">
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
        </ProfessionalLayout>
    );
}
