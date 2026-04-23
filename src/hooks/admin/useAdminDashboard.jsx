import { useEffect, useState } from "react";
import * as userServices from '../../services/admin/usersServices';

export default function useAdminDashboard() {
    const [summary , setSummary] = useState({
        total_users: 0
    });

    useEffect(() => {
        async function fetchAdminSummary() {
            try {
                const user_total = await userServices.getUserCount();

                setSummary((c) => ({ ...c, total_users: user_total.data.user_total}));
            } catch (error) {
                console.error("Errore : " , error);
            }
        }

        fetchAdminSummary();
    } , [])

    return { summary }
}