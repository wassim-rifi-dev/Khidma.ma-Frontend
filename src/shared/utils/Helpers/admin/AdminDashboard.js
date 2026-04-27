export function getRequestStatusMeta(status) {
    switch (status) {
        case "Terminer":
            return {
                label: "Completed",
                color: "bg-emerald-100 text-emerald-700",
            };
        case "En_Cour":
            return {
                label: "In progress",
                color: "bg-sky-100 text-sky-700",
            };
        case "Nouveau":
            return {
                label: "Pending",
                color: "bg-amber-100 text-amber-700",
            };
        default:
            return {
                label: status || "Unknown",
                color: "bg-slate-100 text-slate-700",
            };
    }
}

export function formatLatestRequestRows(requests) {
    if (!Array.isArray(requests)) {
        return [];
    }

    return requests.map((request) => {
        const statusMeta = getRequestStatusMeta(request?.status);

        return {
            id: `#REQ-${request?.id ?? "----"}`,
            service: request?.service?.title || "Unknown service",
            city: request?.service?.city || request?.address || "Unknown city",
            status: statusMeta.label,
            color: statusMeta.color,
        };
    });
}
