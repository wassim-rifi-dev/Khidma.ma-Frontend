import { useEffect, useState } from "react";
import { getAdminsCount } from "../../services/admin/usersServices";

export default function useAdminsCount() {
    const [adminsCount, setAdminsCount] = useState(0);

    useEffect(() => {
        async function fetchAdminsCount() {
            try {
                const response = await getAdminsCount();

                setAdminsCount(response?.data?.admins ?? 0);
            } catch (error) {
                console.error("Error fetching admins count:", error);
            }
        }

        fetchAdminsCount();
    }, []);

    return { adminsCount };
}
