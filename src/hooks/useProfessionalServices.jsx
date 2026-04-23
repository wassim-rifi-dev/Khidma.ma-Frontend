import { useEffect, useState } from "react";
import * as professionalServicesService from '../services/ServiceServices';

export default function useProfessionalServices() {
    const [services , setServices] = useState();
    const [summary , setSummary] = useState({
        published_services: 0,
        priced_offers: 0,
        categories: 0,
        average_rating: 0
    });

    useEffect(() => {
        async function handleProfessionelServices() {
            try {
                const res = await professionalServicesService.getProfessionalServices();
                setServices(res.data.services);
            } catch (error) {
                console.error("Error: " + error);
            }
        }

        async function handleProfessionelServicesSummary() {
            try {
                const res = await professionalServicesService.getProfessionalServicesSummary();

                const [published_services , priced_offers , categories , average_rating] = res.data.summary;

                setSummary({
                    published_services,
                    priced_offers,
                    categories,
                    average_rating
                });
            } catch (error) {
                console.error("Error : " , error);
            }
        }

        handleProfessionelServices();
        handleProfessionelServicesSummary();
    } , [])

    return {services , summary};
}