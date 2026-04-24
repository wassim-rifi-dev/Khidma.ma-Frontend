import { useEffect, useState } from "react";
import { getActiveUsersCount } from "../../services/admin/usersServices";

export default function useActiveUsersCount() {
    const [activeUsersCount, setActiveUsersCount] = useState(0);

    useEffect(() => {
        async function fetchActiveUsersCount() {
            try {
                const response = await getActiveUsersCount();

                setActiveUsersCount(response?.data?.active_accounts ?? 0);
            } catch (error) {
                console.error("Error fetching active users count:", error);
            }
        }

        fetchActiveUsersCount();
    }, []);

    return { activeUsersCount };
}
