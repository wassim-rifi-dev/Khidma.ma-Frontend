import { useEffect, useState } from "react";
import { getProfessionalRequestById, updateProfessionalRequestStatus } from "../services/RequestServices";

export default function useProfessionalRequestDetails(requestId) {
    const [requestDetails, setRequestDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

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

    async function acceptRequest() {
        if (!requestId || !requestDetails || requestDetails.status !== "Nouveau") {
            return false;
        }

        setIsUpdating(true);

        try {
            const response = await updateProfessionalRequestStatus(requestId, "En_Cour");
            setRequestDetails((currentRequest) => ({
                ...currentRequest,
                ...(response.data?.request || {}),
            }));
            return true;
        } catch (error) {
            console.error("Error accepting professional request:", error);
            return false;
        } finally {
            setIsUpdating(false);
        }
    }

    return { requestDetails, isLoading, isUpdating, acceptRequest };
}
