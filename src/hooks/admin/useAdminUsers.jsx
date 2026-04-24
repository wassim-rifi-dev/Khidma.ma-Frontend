import { useEffect, useState } from "react";
import {
    getActiveUsersCount,
    getAdminsCount,
    getAllUser,
    getTotalUsersCount,
} from "../../services/admin/usersServices";
import { formatAdminUsers } from "../../utils/Helpers/admin/Users";

export default function useAdminUsers() {
    const [users, setUsers] = useState([]);
    const [summaryCards, setSummaryCards] = useState([
        { label: "Total users", value: 0 },
        { label: "Active accounts", value: 0 },
        { label: "Admins", value: 0 },
    ]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const [
                    usersResponse,
                    totalUsersResponse,
                    activeUsersResponse,
                    adminsResponse,
                ] = await Promise.all([
                    getAllUser(),
                    getTotalUsersCount(),
                    getActiveUsersCount(),
                    getAdminsCount(),
                ]);

                setUsers(formatAdminUsers(usersResponse?.data?.users));
                setSummaryCards([
                    { label: "Total users", value: totalUsersResponse?.data?.total_users ?? 0 },
                    { label: "Active accounts", value: activeUsersResponse?.data?.active_accounts ?? 0 },
                    { label: "Admins", value: adminsResponse?.data?.admins ?? 0 },
                ]);
            } catch (error) {
                console.error("Error fetching admin users:", error);
            }
        }

        fetchUsers();
    }, []);

    return { users, summaryCards };
}
