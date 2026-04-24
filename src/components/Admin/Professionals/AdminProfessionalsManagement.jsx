import {
    FiShield,
} from "react-icons/fi";
import useAdminProfessionals from "../../../hooks/admin/useAdminProfessionals";
import ProfessionalsSummaryCards from "./ProfessionalsSummaryCards";
import ProfessionalsTable from "./ProfessionalsTable";

export default function AdminProfessionalsManagement() {
    const {
        activeFilter,
        feedback,
        loading,
        pendingProfessionalId,
        professionals,
        searchQuery,
        setActiveFilter,
        setSearchQuery,
        summaryCards,
        toggleVerification,
    } = useAdminProfessionals();

    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Professionals management</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Manage professional accounts</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Static admin page for checking professional profiles, verification states, and quick moderation actions.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiShield className="h-5 w-5 text-[#F97415]" />
                        <span>Admin-only workspace</span>
                    </div>
                </div>
            </section>

            <ProfessionalsSummaryCards cards={summaryCards} />
            <ProfessionalsTable
                activeFilter={activeFilter}
                feedback={feedback}
                loading={loading}
                pendingProfessionalId={pendingProfessionalId}
                professionals={professionals}
                searchQuery={searchQuery}
                setActiveFilter={setActiveFilter}
                setSearchQuery={setSearchQuery}
                toggleVerification={toggleVerification}
            />
        </div>
    );
}
