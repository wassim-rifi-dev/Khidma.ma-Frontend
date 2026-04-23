import { useEffect, useState } from "react";
import * as professionalServicesService from "../services/ServiceServices";

export default function useProfessionalServices() {
    const [services, setServices] = useState([]);
    const [trashedServices, setTrashedServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [summary, setSummary] = useState({
        published_services: 0,
        priced_offers: 0,
        categories: 0,
        average_rating: 0,
    });
    const [isUpdating, setIsUpdating] = useState(false);

    async function loadServices() {
        try {
            const res = await professionalServicesService.getProfessionalServices();
            setServices(res.data?.services || []);
        } catch (error) {
            console.error("Error: " + error);
        }
    }

    async function loadTrashedServices() {
        try {
            const res = await professionalServicesService.getTrashedProfessionalServices();
            setTrashedServices(res.data?.services || []);
        } catch (error) {
            console.error("Error: " + error);
        }
    }

    async function loadSummary() {
        try {
            const res = await professionalServicesService.getProfessionalServicesSummary();
            setSummary(res.data?.summary || {
                published_services: 0,
                priced_offers: 0,
                categories: 0,
                average_rating: 0,
            });
        } catch (error) {
            console.error("Error : " , error);
        }
    }

    useEffect(() => {
        async function loadData() {
            setIsLoading(true);

            try {
                await Promise.all([
                    loadServices(),
                    loadTrashedServices(),
                    loadSummary(),
                ]);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, []);

    async function restoreService(serviceId) {
        setIsUpdating(true);

        try {
            await professionalServicesService.restoreProfessionalService(serviceId);
            await Promise.all([loadServices(), loadTrashedServices(), loadSummary()]);
            return true;
        } catch (error) {
            console.error("Error restoring service:", error);
            return false;
        } finally {
            setIsUpdating(false);
        }
    }

    return { services, trashedServices, summary, isLoading, isUpdating, restoreService };
}
