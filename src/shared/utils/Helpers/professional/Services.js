export function formatProfessionalServicePrice(service) {
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
