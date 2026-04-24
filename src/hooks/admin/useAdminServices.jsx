import { useEffect, useMemo, useState } from "react";
import {
    deleteService,
    getAllServices,
} from "../../services/admin/serviceServices";
import {
    buildServicesSummaryCards,
    formatAdminServices,
} from "../../utils/Helpers/admin/Services";

export default function useAdminServices() {
    const [allServices, setAllServices] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pendingServiceId, setPendingServiceId] = useState(null);

    useEffect(() => {
        async function fetchAdminServices() {
            try {
                setLoading(true);
                setFeedback(null);

                const response = await getAllServices();
                const servicesList = response?.data?.services ?? [];

                setAllServices(servicesList);
            } catch (error) {
                console.error("Error fetching admin services:", error);
                setFeedback({
                    type: "error",
                    message: error?.message || "Unable to load services right now.",
                });
            } finally {
                setLoading(false);
            }
        }

        fetchAdminServices();
    }, []);

    const services = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        return formatAdminServices(allServices).filter((service) => {
            if (activeFilter === "published" && service.status !== "Published") {
                return false;
            }

            if (activeFilter === "flagged") {
                return false;
            }

            if (!normalizedQuery) {
                return true;
            }

            return [
                service.title,
                service.category,
                service.professional,
                service.professionalUsername,
            ]
                .filter(Boolean)
                .some((value) => value.toLowerCase().includes(normalizedQuery));
        });
    }, [activeFilter, allServices, searchQuery]);

    const summaryCards = useMemo(
        () => buildServicesSummaryCards(allServices),
        [allServices]
    );

    async function removeService(serviceId) {
        const targetService = allServices.find((service) => service?.id === serviceId);

        if (!targetService) {
            return;
        }

        try {
            setPendingServiceId(serviceId);
            setFeedback(null);

            const response = await deleteService(serviceId);

            setAllServices((currentServices) =>
                currentServices.filter((service) => service?.id !== serviceId)
            );
            setFeedback({
                type: "success",
                message: response?.message || "Service deleted successfully.",
            });
        } catch (error) {
            setFeedback({
                type: "error",
                message: error?.message || "Unable to delete service.",
            });
        } finally {
            setPendingServiceId(null);
        }
    }

    return {
        activeFilter,
        feedback,
        loading,
        pendingServiceId,
        removeService,
        searchQuery,
        services,
        setActiveFilter,
        setSearchQuery,
        summaryCards,
    };
}
