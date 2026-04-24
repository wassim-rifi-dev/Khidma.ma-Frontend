import { useEffect, useState } from "react";
import { getAllServices } from "../../services/admin/serviceServices";
import {
    buildServicesSummaryCards,
    formatAdminServices,
} from "../../utils/Helpers/admin/Services";

export default function useAdminServices() {
    const [summaryCards, setSummaryCards] = useState([
        { label: "Total services", value: 0 },
        { label: "Published", value: 0 },
        { label: "Flagged", value: 0 },
    ]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchAdminServices() {
            try {
                const response = await getAllServices();
                const servicesList = response?.data?.services ?? [];

                setSummaryCards(buildServicesSummaryCards(servicesList));
                setServices(formatAdminServices(servicesList));
            } catch (error) {
                console.error("Error fetching admin services:", error);
            }
        }

        fetchAdminServices();
    }, []);

    return { summaryCards, services };
}
