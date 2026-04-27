import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsStats from "./AnalyticsStats";
import PerformanceTip from "./PerformanceTip";
import RatingSummary from "./RatingSummary";
import RequestsOverTimeChart from "./RequestsOverTimeChart";
import RequestsStatusChart from "./RequestsStatusChart";
import TopPerformingServices from "./TopPerformingServices";
import useProfessionalAnalytics from "../../hooks/useProfessionalAnalytics";

export default function AnalyticsSection() {
    const { analytics, isLoading } = useProfessionalAnalytics();

    if (isLoading) {
        return (
            <div className="rounded-[28px] bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
                Loading analytics...
            </div>
        );
    }

    if (!analytics) {
        return (
            <div className="rounded-[28px] bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
                Analytics unavailable.
            </div>
        );
    }

    return (
        <>
            <AnalyticsHeader />
            <AnalyticsStats stats={analytics.stats} />
            <RequestsOverTimeChart chartData={analytics.requests_over_time} />
            <div className="mt-6 grid gap-8 xl:grid-cols-2">
                <RequestsStatusChart items={analytics.request_status_items} total={analytics.request_status_total} />
                <TopPerformingServices services={analytics.top_services} />
            </div>
            <div className="mt-6 grid gap-8 xl:grid-cols-2">
                <RatingSummary summary={analytics.rating_summary} />
                <PerformanceTip tip={analytics.performance_tip} />
            </div>
        </>
    );
}
