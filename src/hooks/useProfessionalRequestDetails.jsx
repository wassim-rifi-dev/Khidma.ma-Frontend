import { useEffect, useState } from "react";
import { getProfessionalRequestById } from "../services/RequestServices";

export default function useProfessionalRequestDetails(requestId) {
    const [requestDetails, setRequestDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRequestDetails() {
            try {
                const response = await getProfessionalRequestById(requestId);
                setRequestDetails(response.data?.request || null);
            } catch (error) {
                console.error("Error fetching professional request details:", error);
                setRequestDetails(null);
            } finally {
                setIsLoading(false);
            }
        }

        if (!requestId) {
            setIsLoading(false);
            return;
        }

        fetchRequestDetails();
    }, [requestId]);

    return { requestDetails, isLoading };
}
