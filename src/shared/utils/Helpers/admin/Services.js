export function buildServicesSummaryCards(services) {
    const servicesList = Array.isArray(services) ? services : [];

    return [
        { label: "Total services", value: servicesList.length },
        { label: "Published", value: servicesList.length },
        { label: "Flagged", value: 0 },
    ];
}

function formatUpdatedDate(dateString) {
    if (!dateString) {
        return "Recently";
    }

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "Recently";
    }

    return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
}

function getStatusMeta() {
    return {
        label: "Published",
        tone: "bg-emerald-50 text-emerald-600",
    };
}

export function formatAdminServices(services) {
    const servicesList = Array.isArray(services) ? services : [];

    return servicesList.map((service) => {
        const statusMeta = getStatusMeta(service);

        return {
            id: service?.id,
            title: service?.title || "Untitled service",
            category: service?.category?.name || "No category",
            professionalUsername: service?.professional?.user?.username || "",
            professional: service?.professional?.user?.name || "Unknown professional",
            status: statusMeta.label,
            updated: formatUpdatedDate(service?.updated_at || service?.created_at),
            statusTone: statusMeta.tone,
        };
    });
}
