import { useState } from "react";
import useProfessionalRequests from "../../hooks/useProfessionalRequests";
import RequestsHeader from "./RequestsHeader";
import RequestsList from "./RequestsList";

const filters = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "In Progress", value: "in-progress" },
    { label: "New", value: "new" },
];

export default function RequestsSection() {
    const { requests, summary, isLoading, updatingRequestId, completeRequest } = useProfessionalRequests();
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <>
            <RequestsHeader summary={summary} />
            <RequestsList
                requests={requests}
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                isLoading={isLoading}
                updatingRequestId={updatingRequestId}
                onCompleteRequest={completeRequest}
            />
        </>
    );
}
