import { useEffect, useState } from "react";
import * as userServices from '../services/usersServices';
import * as professionalsServices from '../services/professionalsServices';
import * as serviceServices from '../services/serviceServices';
import * as requestServices from '../services/requestServices';
import { formatLatestRequestRows } from '../../../shared/utils/Helpers/admin/AdminDashboard';

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
                ] = await Promise.all([
                    userServices.getUserCount(),
                    professionalsServices.getActiveProfessionalsCount(),
                    requestServices.getOpenRequestsCount(),
                    serviceServices.getPublishedServicesCount(),
                ]);

                setSummary({
                    total_users: userTotalResponse?.data?.user_total ?? 0,
                    active_professionals: activeProfessionalsResponse?.data?.active_professionals ?? 0,
                    open_requests: openRequestsResponse?.data?.open_requests ?? 0,
                    published_services: publishedServicesResponse?.data?.published_services ?? 0,
                });
                
            } catch (error) {
                console.error("Errore : " , error);
            }
        }

        async function fetchLatestRequestRows() {
            try {
                const latestRequestsResponse = await requestServices.getLatestRequests();

                setLatestRequestRows(formatLatestRequestRows(latestRequestsResponse?.data?.requests));
            } catch (error) {
                console.error("Error : " , error);
            }
        }

        fetchAdminSummary();
        fetchLatestRequestRows();
    } , []);

    return { summary, latestRequestRows }
}
