import { useEffect, useState } from "react";
import { getTotalUsersCount } from "../../services/admin/usersServices";

export default function useTotalUsersCount() {
    const [totalUsersCount, setTotalUsersCount] = useState(0);

    useEffect(() => {
        async function fetchTotalUsersCount() {
            try {
                const response = await getTotalUsersCount();

                setTotalUsersCount(response?.data?.total_users ?? 0);
            } catch (error) {
                console.error("Error fetching total users count:", error);
            }
        }

        fetchTotalUsersCount();
    }, []);

    return { totalUsersCount };
}
