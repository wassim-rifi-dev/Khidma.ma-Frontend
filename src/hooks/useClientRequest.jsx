import { useEffect, useState } from "react"
import * as requestServices from '../services/RequestServices';

export default function useClientRequest() {
    const [request_count , setRequestCount] = useState(0);

    useEffect(() => {
        async function fetchCount() {
            try {
                const res = await requestServices.getClientRequestCount();

                setRequestCount(res.data.count); 
            } catch (error) {
                console.error("Error: " + error);
            }
        }

        fetchCount();
    } , [])

    return { request_count };
}