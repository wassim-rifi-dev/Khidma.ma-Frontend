import { useEffect, useState } from "react";
import { getTopProfessionals } from "../../professional/services/ProfessionalServices";


export default function useTopProfessionalsInHome() {
    const [professionals, setProfessionals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTopProfessionals() {
            try {
                const response = await getTopProfessionals();
                setProfessionals(response.data.professionals ?? []);
            } catch (error) {
                console.error("Error fetching top professionals:", error);
                setProfessionals([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTopProfessionals();
    } , []);

    return { professionals, isLoading };
}