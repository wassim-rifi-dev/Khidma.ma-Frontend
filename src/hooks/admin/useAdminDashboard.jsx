import { useEffect, useState } from "react";
import * as userServices from '../../services/admin/usersServices';
import * as professionalsServices from '../../services/admin/professionalsServices';
import * as serviceServices from '../../services/admin/serviceServices';
import * as requestServices from '../../services/admin/requestServices';

function getRequestStatusMeta(status) {
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

function formatLatestRequestRows(requests) {
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

export default function useAdminDashboard() {
    const [summary , setSummary] = useState({
        total_users: 0,
        active_professionals: 0,
        open_requests: 0,
        published_services: 0,
    });
    const [latestRequestRows, setLatestRequestRows] = useState([]);

    useEffect(() => {
        async function fetchAdminSummary() {
            try {
                const [
                    userTotalResponse,
                    activeProfessionalsResponse,
                    openRequestsResponse,
                    publishedServicesResponse,
                    latestRequestsResponse,
                ] = await Promise.all([
                    userServices.getUserCount(),
                    professionalsServices.getActiveProfessionalsCount(),
                    requestServices.getOpenRequestsCount(),
                    serviceServices.getPublishedServicesCount(),
                    requestServices.getLatestRequests(),
                ]);

                setSummary({
                    total_users: userTotalResponse?.data?.user_total ?? 0,
                    active_professionals: activeProfessionalsResponse?.data?.active_professionals ?? 0,
                    open_requests: openRequestsResponse?.data?.open_requests ?? 0,
                    published_services: publishedServicesResponse?.data?.published_services ?? 0,
                });
                setLatestRequestRows(formatLatestRequestRows(latestRequestsResponse?.data?.requests));
            } catch (error) {
                console.error("Errore : " , error);
            }
        }

        fetchAdminSummary();
    } , []);

    return { summary, latestRequestRows }
}
