import {
    FiShield,
} from "react-icons/fi";
import useAdminServices from "../../hooks/useAdminServices";
import ServicesSummaryCards from "./ServicesSummaryCards";
import ServicesTable from "./ServicesTable";

export default function AdminServicesManagement() {
    const {
        activeFilter,
        feedback,
        loading,
        pendingServiceId,
        removeService,
        searchQuery,
        services,
        setActiveFilter,
        setSearchQuery,
        summaryCards,
    } = useAdminServices();

    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Services management</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Manage published services</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Static admin page for reviewing service cards, moderation state, and quick visibility actions.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiShield className="h-5 w-5 text-[#F97415]" />
                        <span>Admin-only workspace</span>
                    </div>
                </div>
            </section>

            <ServicesSummaryCards cards={summaryCards} />
            <ServicesTable
                activeFilter={activeFilter}
                feedback={feedback}
                loading={loading}
                pendingServiceId={pendingServiceId}
                removeService={removeService}
                searchQuery={searchQuery}
                services={services}
                setActiveFilter={setActiveFilter}
                setSearchQuery={setSearchQuery}
            />
        </div>
    );
}
