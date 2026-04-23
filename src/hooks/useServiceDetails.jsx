import { useEffect, useMemo, useState } from "react";
import { getServiceById, updateProfessionalService } from "../services/ServiceServices";
import { buildServiceDetails } from "../utils/Helpers/Services";

export default function useServiceDetails(serviceId) {
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    async function fetchServiceDetails() {
        const response = await getServiceById(serviceId);
        return response.data.service || null;
    }

    useEffect(() => {
        let isMounted = true;
        
        async function fetchService() {
            setIsLoading(true);
            setError(null);

            try {
                const nextService = await fetchServiceDetails();

                if (isMounted) {
                    setService(nextService);
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

    async function saveService(serviceData) {
        if (!serviceId) {
            return false;
        }

        setIsSaving(true);

        try {
            const response = await updateProfessionalService(serviceId, {
                title: serviceData.title,
                city: serviceData.city,
                description: serviceData.description,
                price_min: serviceData.price_min,
                price_max: serviceData.price_max,
            });

            setService(response.data?.service || null);
            return true;
        } catch (requestError) {
            console.error("Unable to update service:", requestError);
            return false;
        } finally {
            setIsSaving(false);
        }
    }

    return useMemo(
        () => ({
            details: buildServiceDetails(service),
            isLoading,
            error,
            isSaving,
            saveService,
        }),
        [service, isLoading, error, isSaving],
    );
}
