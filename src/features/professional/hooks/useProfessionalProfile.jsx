import { useEffect, useMemo, useState } from "react";
import { getProfessionalById } from "../services/ProfessionalServices";
import getStorageUrl from "../../../shared/utils/getStorageUrl";

function formatDate(date) {
    if (!date) {
        return "Recently";
    }

    return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}

function mapReview(review) {
    return {
        id: review.id,
        name: review.client?.name || "Client",
        location: review.order?.service?.city || "Morocco",
        time: formatDate(review.created_at),
        rating: Number(review.rating || 0),
        avatar: getStorageUrl(review.client?.photo),
        avatarLetter: (review.client?.first_name || review.client?.name || "C").charAt(0),
        text: review.comment || "No comment provided.",
    };
}

function buildProfile(professional) {
    if (!professional) {
        return null;
    }

    const services = professional.services || [];
    const reviews = services.flatMap((service) => service.reviews || []).map(mapReview);
    const recentImages = services
        .flatMap((service) => service.images || [])
        .map((image) => getStorageUrl(image.image_url))
        .filter(Boolean);

    return {
        professional,
        services,
        reviews,
        recentImages,
        reviewCount: reviews.length,
        completedRequests: professional.requests_count || 0,
        serviceCount: professional.services_count || services.length,
    };
}

export default function useProfessionalProfile(professionalId) {
    const [professional, setProfessional] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchProfessional() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await getProfessionalById(professionalId);

                if (isMounted) {
                    setProfessional(response.data.professional || null);
                }
            } catch (requestError) {
                if (isMounted) {
                    setError(requestError?.message || "Unable to load professional profile.");
                    setProfessional(null);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        if (professionalId) {
            fetchProfessional();
        } else {
            setProfessional(null);
            setIsLoading(false);
            setError("Professional id is missing.");
        }

        function handleReviewCreated(event) {
            const nextProfessionalId = String(event?.detail?.professionalId || "");

            if (nextProfessionalId && nextProfessionalId === String(professionalId)) {
                fetchProfessional();
            }
        }

        window.addEventListener("client-review-created", handleReviewCreated);

        return () => {
            isMounted = false;
            window.removeEventListener("client-review-created", handleReviewCreated);
        };
    }, [professionalId]);

    return useMemo(
        () => ({
            profile: buildProfile(professional),
            isLoading,
            error,
        }),
        [professional, isLoading, error],
    );
}
