import { useEffect, useMemo, useState } from "react";
import { getProfessionalRequests, updateProfessionalRequestStatus } from "../../services/services/RequestServices";

export default function useProfessionalRequests() {
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updatingRequestId, setUpdatingRequestId] = useState(null);

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

    async function completeRequest(requestId) {
        if (!requestId || updatingRequestId) {
            return false;
        }

        setUpdatingRequestId(requestId);

        try {
            const response = await updateProfessionalRequestStatus(requestId, "Terminer");
            const updatedRequest = response.data?.request;

            if (updatedRequest) {
                setRequests((currentRequests) => currentRequests.map((request) => (
                    request.id === requestId ? { ...request, ...updatedRequest } : request
                )));
            }

            return true;
        } catch (error) {
            console.error("Error completing professional request:", error);
            return false;
        } finally {
            setUpdatingRequestId(null);
        }
    }

    return { requests, summary, isLoading, updatingRequestId, completeRequest };
}
