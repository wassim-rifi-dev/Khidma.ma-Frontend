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
