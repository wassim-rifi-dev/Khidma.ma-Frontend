import { useEffect, useState } from "react";
import { getAdminAnalytics } from "../../services/admin/analyticsServices";

const initialAnalytics = {
    summary_cards: [],
    monthly_activity: {
        labels: [],
        requests: [],
        completed: [],
        trend: "0%",
    },
    top_categories: [],
    performance_summary: [],
    quick_insights: [],
};

export default function useAdminAnalytics() {
    const [analytics, setAnalytics] = useState(initialAnalytics);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchAnalytics() {
            try {
                setLoading(true);
                setError("");

                const response = await getAdminAnalytics();

                setAnalytics(response?.data?.analytics ?? initialAnalytics);
            } catch (requestError) {
                setError(requestError?.message || "Unable to load admin analytics.");
            } finally {
                setLoading(false);
            }
        }

        fetchAnalytics();
    }, []);

    return {
        analytics,
        loading,
        error,
    };
}
