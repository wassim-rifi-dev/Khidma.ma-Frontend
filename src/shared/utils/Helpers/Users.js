export function getClientName(request) {
    return request?.client?.name
        || `${request?.client?.first_name || ""} ${request?.client?.last_name || ""}`.trim()
        || "Client";
}
