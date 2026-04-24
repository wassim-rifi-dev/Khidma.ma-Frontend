export function buildProfessionalsSummaryCards(professionals) {
    const professionalsList = Array.isArray(professionals) ? professionals : [];
    const totalProfessionals = professionalsList.length;
    const verifiedProfessionals = professionalsList.filter((professional) => professional?.is_verified).length;
    const pendingProfessionals = totalProfessionals - verifiedProfessionals;

    return [
        { label: "Total professionals", value: totalProfessionals },
        { label: "Verified", value: verifiedProfessionals },
        { label: "Pending review", value: pendingProfessionals },
    ];
}

function formatJoinedDate(dateString) {
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

function getAvailabilityMeta(professional) {
    if (!professional?.is_verified) {
        return {
            label: "Reviewing",
            tone: "bg-slate-100 text-slate-600",
        };
    }

    if ((professional?.requests_count ?? 0) > 0) {
        return {
            label: "Busy",
            tone: "bg-orange-50 text-[#F97415]",
        };
    }

    return {
        label: "Available",
        tone: "bg-sky-50 text-sky-600",
    };
}

function getStatusMeta(professional) {
    if (professional?.is_verified) {
        return {
            label: "Verified",
            tone: "bg-emerald-50 text-emerald-600",
        };
    }

    return {
        label: "Pending",
        tone: "bg-amber-50 text-amber-600",
    };
}

export function formatAdminProfessionals(professionals) {
    const professionalsList = Array.isArray(professionals) ? professionals : [];

    return professionalsList.map((professional) => {
        const availabilityMeta = getAvailabilityMeta(professional);
        const statusMeta = getStatusMeta(professional);

        return {
            id: professional?.id,
            name: professional?.user?.name || "Unknown professional",
            specialty: professional?.category?.name || "No category",
            city: professional?.city || "Unknown city",
            status: statusMeta.label,
            availability: availabilityMeta.label,
            joined: formatJoinedDate(professional?.created_at),
            statusTone: statusMeta.tone,
            availabilityTone: availabilityMeta.tone,
        };
    });
}
