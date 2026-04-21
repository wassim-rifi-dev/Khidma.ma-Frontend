import { useEffect, useState } from "react"
import * as requestServices from '../services/RequestServices';

export default function useClientRequest() {
    const [isLoading , setIsLoading] = useState(true);
    const [requests, setRequests] = useState([]);
    const [request_count , setRequestCount] = useState(0);
    const [completed_request_count, setCompletedRequestCount] = useState(0);
    const [review_count, setReviewCount] = useState(0);

    useEffect(() => {
        async function fetchCount() {
            try {
                const [totalRes, completedRes, reviewRes] = await Promise.all([
                    requestServices.getClientRequestCount(),
                    requestServices.getCompletedClientRequestCount(),
                    requestServices.getClientReviewCount(),
                ]);

                setRequestCount(totalRes.data.count);
                setCompletedRequestCount(completedRes.data.count);
                setReviewCount(reviewRes.data.count);
            } catch (error) {
                console.error("Error: " + error);
            }
        }

        async function fetchRequests() {
            try {
                const response = await requestServices.getLastThreeClientRequest();
                const requests = response.data.requests;
                setRequests(requests);
            } catch (error) {
                console.error("Error fetching client requests:", error);
                setRequests([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRequests();
        fetchCount();
    } , [])

    return { request_count, completed_request_count, review_count, requests, isLoading };
}
