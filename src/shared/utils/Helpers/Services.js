import getStorageUrl from "../getStorageUrl";
import {
    formatRequestDate,
    formatRequestPrice,
    getProfessionalRequestStatusConfig,
} from "./Request";
import { getClientName } from "./Users";

export function formatPrice(service) {
    if (service?.price_min && service?.price_max) {
        return `${service.price_min} - ${service.price_max} MAD`;
    }

    if (service?.price_min) {
        return `From ${service.price_min} MAD`;
    }

    if (service?.price_max) {
        return `Up to ${service.price_max} MAD`;
    }

    return "Price not set";
}

export function getCategoryName(service) {
    return service?.category?.name || service?.categorie?.name || "Service";
}

export function buildServiceDetails(service) {
    if (!service) {
        return null;
    }

    const images = (service.images || [])
        .map((image, index) => ({
            src: getStorageUrl(image.image_url),
            title: image.alt || service.title || `Service photo ${index + 1}`,
        }))
        .filter((image) => image.src);

    const requests = (service.requests || [])
        .filter((request) => !request.is_canceled)
        .sort((firstRequest, secondRequest) => new Date(secondRequest.created_at) - new Date(firstRequest.created_at));

    const completedRequests = requests.filter((request) => request.status === "Terminer").length;
    const recentRequests = requests.slice(0, 5).map((request) => {
        const status = getProfessionalRequestStatusConfig(request.status);

        return {
            id: request.id,
            client: getClientName(request),
            date: formatRequestDate(request.preferred_date || request.created_at),
            status: status.label,
            statusClassName: status.className,
            value: formatRequestPrice(request.price),
        };
    });

    const stats = [
        { label: "Price range", value: formatPrice(service), iconKey: "price" },
        { label: "Total requests", value: requests.length, iconKey: "requests" },
        { label: "Completed jobs", value: completedRequests, iconKey: "completed" },
        { label: "Reviews", value: service.reviews?.length || 0, iconKey: "reviews" },
    ];

    const detailsSections = [
        {
            title: "Category",
            value: getCategoryName(service),
        },
        {
            title: "City",
            value: service.city || "City not set",
        },
        {
            title: "Professional",
            value: service.professional?.user?.name || "Professional",
        },
        {
            title: "Created",
            value: formatRequestDate(service.created_at),
        },
    ];

    const info = {
        title: service.title || "Untitled service",
        category: getCategoryName(service),
        city: service.city || "City not set",
        rating: Number(service.rating || 0).toFixed(1),
        description: service.description || "No description provided yet.",
        price: formatPrice(service),
        status: "Published",
    };

    return {
        service,
        images,
        mainImage: images[0] || null,
        professional: service.professional || null,
        reviews: service.reviews || [],
        requests,
        recentRequests,
        stats,
        detailsSections,
        info,
        hasImages: images.length > 0,
        hasRecentRequests: recentRequests.length > 0,
    };
}
