import { useEffect, useMemo, useState } from "react";
import { getServiceById } from "../services/ServiceServices";
import getStorageUrl from "../utils/getStorageUrl";

function formatPrice(service) {
    if (service.price_min && service.price_max) {
        return `${service.price_min} - ${service.price_max} MAD`;
    }

    if (service.price_min) {
        return `From ${service.price_min} MAD`;
    }

    if (service.price_max) {
        return `Up to ${service.price_max} MAD`;
    }

    return "Contact for price";
}

function buildServiceDetails(service) {
    if (!service) {
        return null;
    }

    const images = (service.images || [])
        .map((image) => getStorageUrl(image.image_url))
        .filter(Boolean);

    return {
        service,
        images,
        mainImage: images[0] || null,
        professional: service.professional || null,
        reviews: service.reviews || [],
        price: formatPrice(service),
        rating: Number(service.rating || 0).toFixed(1),
    };
}

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
