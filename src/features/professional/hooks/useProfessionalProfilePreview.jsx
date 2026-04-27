import { useEffect, useState } from "react";
import { getMyProfessionalProfile } from "../services/ProfessionalServices";

export default function useProfessionalProfilePreview() {
    const [user, setUser] = useState(null);
    const [professional, setProfessional] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function fetchProfile() {
            setIsLoading(true);
            setError("");

            try {
                const response = await getMyProfessionalProfile();

                if (!isMounted) {
                    return;
                }

                setUser(response?.data?.user || null);
                setProfessional(response?.data?.professional || null);
            } catch (requestError) {
                if (!isMounted) {
                    return;
                }

                setUser(null);
                setProfessional(null);
                setError(requestError?.message || "Unable to load your profile preview.");
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetchProfile();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        user,
        professional,
        isLoading,
        error,
    };
}
