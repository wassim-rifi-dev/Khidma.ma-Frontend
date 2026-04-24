import { useEffect, useState } from "react"
import * as requestServices from '../services/RequestServices';

export default function useClientRequest() {
    const [isLoading , setIsLoading] = useState(true);
    const [three_requests, setThreeRequests] = useState([]);
    const [six_requests, setSixRequests] = useState([]);
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

        async function fetchLastThreeRequests() {
            try {
                const response = await requestServices.getLastThreeClientRequest();
                const requests = response.data.requests;
                setThreeRequests(requests);
            } catch (error) {
                console.error("Error fetching client requests:", error);
                setThreeRequests([]);
            } finally {
                setIsLoading(false);
            }
        }

        async function fetchLastSixRequests() {
            try {
                const response = await requestServices.getLastSixClientRequest();
                setSixRequests(response.data.requests ?? []);
            } catch (error) {
                console.error("Error fetching recent requests:", error);
                setSixRequests([]);
            } finally {
                setIsLoading(false);
            }
        }

        async function loadClientRequests() {
            setIsLoading(true);

            await Promise.all([
                fetchLastSixRequests(),
                fetchLastThreeRequests(),
                fetchCount(),
            ]);
        }

        function refreshClientRequests() {
            loadClientRequests();
        }

        loadClientRequests();
        window.addEventListener("client-request-created", refreshClientRequests);
        window.addEventListener("client-review-created", refreshClientRequests);

        return () => {
            window.removeEventListener("client-request-created", refreshClientRequests);
            window.removeEventListener("client-review-created", refreshClientRequests);
        };
    } , [])

    return { request_count, completed_request_count, review_count, three_requests, six_requests, isLoading };
}
