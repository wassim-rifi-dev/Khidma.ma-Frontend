import { useEffect, useMemo, useState } from "react";
import { getServiceById } from "../services/ServiceServices";
import { buildServiceDetails } from "../utils/Helpers/Services";

export default function useServiceDetails(serviceId) {
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchService() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await getServiceById(serviceId);

                if (isMounted) {
                    setService(response.data.service || null);
                }
            } catch (requestError) {
                if (isMounted) {
                    setError(requestError?.message || "Unable to load service.");
                    setService(null);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        if (serviceId) {
            fetchService();
        } else {
            setService(null);
            setIsLoading(false);
            setError("Service id is missing.");
        }

        return () => {
            isMounted = false;
        };
    }, [serviceId]);

    return useMemo(
        () => ({
            details: buildServiceDetails(service),
            isLoading,
            error,
        }),
        [service, isLoading, error],
    );
}
