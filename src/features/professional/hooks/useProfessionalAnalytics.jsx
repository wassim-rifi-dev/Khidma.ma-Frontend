import { useEffect, useState } from "react";
import { getProfessionalAnalytics } from "../services/ProfessionalServices";

export default function useProfessionalAnalytics() {
    const [analytics, setAnalytics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAnalytics() {
            try {
                const response = await getProfessionalAnalytics();
                setAnalytics(response.data?.analytics || null);
            } catch (error) {
                console.error("Error fetching professional analytics:", error);
                setAnalytics(null);
            } finally {
                setIsLoading(false);
            }
        }

        fetchAnalytics();
    }, []);

    return { analytics, isLoading };
}
