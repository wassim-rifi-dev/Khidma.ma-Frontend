import { useEffect, useState } from "react";
import { getAllProfessional } from "../../services/admin/professionalsServices";
import {
    buildProfessionalsSummaryCards,
    formatAdminProfessionals,
} from "../../utils/Helpers/admin/Professionals";

export default function useAdminProfessionals() {
    const [summaryCards, setSummaryCards] = useState([
        { label: "Total professionals", value: 0 },
        { label: "Verified", value: 0 },
        { label: "Pending review", value: 0 },
    ]);
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        async function fetchProfessionalsSummary() {
            try {
                const response = await getAllProfessional();
                const professionals = response?.data?.professionals ?? [];

                setSummaryCards(buildProfessionalsSummaryCards(professionals));
                setProfessionals(formatAdminProfessionals(professionals));
            } catch (error) {
                console.error("Error fetching admin professionals summary:", error);
            }
        }

        fetchProfessionalsSummary();
    }, []);

    return { summaryCards, professionals };
}
