import RequestCard from "./RequestCard";
import RequestFilters from "./RequestFilters";
import { getProfessionalRequestFilterValue } from "../../../../shared/utils/Helpers/Request";

export default function RequestsList({
    requests,
    filters,
    activeFilter,
    onFilterChange,
    isLoading,
    updatingRequestId,
    onCompleteRequest,
}) {
    const visibleRequests = activeFilter === "all"
        ? requests
        : requests.filter((request) => getProfessionalRequestFilterValue(request.status) === activeFilter);

    return (
        <section className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-950">Service Requests</h2>
                    <p className="mt-1 text-sm font-medium text-slate-500">Track new orders and ongoing work.</p>
                </div>

                <RequestFilters filters={filters} activeFilter={activeFilter} onFilterChange={onFilterChange} />
            </div>

            <div className="mt-6 space-y-3">
                {isLoading ? (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm font-medium text-slate-500">
                        Loading requests...
                    </div>
                ) : null}

                {!isLoading && !visibleRequests.length ? (
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                        <h3 className="text-lg font-bold text-slate-900">No requests found</h3>
                        <p className="mt-2 text-sm text-slate-500">
                            New client requests will appear here once they come in.
                        </p>
                    </div>
                ) : null}

                {!isLoading ? visibleRequests.map((request) => (
                    <RequestCard
                        key={request.id}
                        request={request}
                        isUpdating={updatingRequestId === request.id}
                        onCompleteRequest={onCompleteRequest}
                    />
                )) : null}
            </div>
        </section>
    );
}
