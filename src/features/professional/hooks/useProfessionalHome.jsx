import { useEffect, useState } from "react";
import { getMyProfessionalProfile } from "../services/ProfessionalServices";

export default function useProfessionalHome() {
    const [user, setUser] = useState(null);
    const [professional, setProfessional] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchProfessionalHome() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await getMyProfessionalProfile();

                if (!isMounted) {
                    return;
                }

                setUser(response.data?.user || null);
                setProfessional(response.data?.professional || null);
            } catch (requestError) {
                if (isMounted) {
                    setUser(null);
                    setProfessional(null);
                    setError(requestError?.message || "Unable to load professional dashboard.");
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetchProfessionalHome();

        return () => {
            isMounted = false;
        };
    }, []);

    const services = professional?.services || [];
    const hasPhoto = Boolean(user?.photo);
    const hasDescription = Boolean(professional?.description?.trim());
    const hasServices = services.length > 0;
    const completedSteps = [hasPhoto || hasDescription, hasServices, (professional?.requests_count || 0) > 0]
        .filter(Boolean)
        .length;

    return {
        user,
        professional,
        services,
        isLoading,
        error,
        completedSteps,
        hasPhoto,
        hasDescription,
        hasServices,
    };
}
