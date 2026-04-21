import { useEffect, useState } from "react"
import * as requestServices from '../services/RequestServices';

export default function useClientRequest() {
    const [request_count , setRequestCount] = useState(0);
    const [completed_request_count, setCompletedRequestCount] = useState(0);

    useEffect(() => {
        async function fetchCount() {
            try {
                const [totalRes, completedRes] = await Promise.all([
                    requestServices.getClientRequestCount(),
                    requestServices.getCompletedClientRequestCount(),
                ]);

                setRequestCount(totalRes.data.count);
                setCompletedRequestCount(completedRes.data.count);
            } catch (error) {
                console.error("Error: " + error);
            }
        }

        fetchCount();
    } , [])

    return { request_count, completed_request_count };
}
