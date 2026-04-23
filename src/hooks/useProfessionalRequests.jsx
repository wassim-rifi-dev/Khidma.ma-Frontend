import { useEffect, useMemo, useState } from "react";
import { getProfessionalRequests } from "../services/RequestServices";

export default function useProfessionalRequests() {
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProfessionalRequests() {
            try {
                const response = await getProfessionalRequests();
                setRequests(response.data?.requests || []);
            } catch (error) {
                console.error("Error fetching professional requests:", error);
                setRequests([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProfessionalRequests();
    }, []);

    const summary = useMemo(() => {
        const completedCount = requests.filter((request) => request.status === "Terminer").length;

        return {
            total: requests.length,
            completed: completedCount,
        };
    }, [requests]);

    return { requests, summary, isLoading };
}
