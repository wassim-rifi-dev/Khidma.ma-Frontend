import { FiShield } from "react-icons/fi";
import useAdminUsers from "../../../hooks/admin/useAdminUsers";
import UsersSummaryCards from "./UsersSummaryCards";
import UsersTable from "./UsersTable";

export default function AdminUsersManagement() {
    const {
        activeFilter,
        feedback,
        loading,
        pendingUserId,
        searchQuery,
        setActiveFilter,
        setSearchQuery,
        summaryCards,
        toggleUserStatus,
        users,
    } = useAdminUsers();

    return (
        <div className="space-y-6">
            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Users management</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Manage platform accounts</h2>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                            Simple static page for reviewing users, checking roles, and visualizing quick account actions.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiShield className="h-5 w-5 text-[#F97415]" />
                        <span>Admin-only workspace</span>
                    </div>
                </div>
            </section>

            <UsersSummaryCards cards={summaryCards} />
            <UsersTable
                activeFilter={activeFilter}
                feedback={feedback}
                loading={loading}
                pendingUserId={pendingUserId}
                searchQuery={searchQuery}
                setActiveFilter={setActiveFilter}
                setSearchQuery={setSearchQuery}
                toggleUserStatus={toggleUserStatus}
                users={users}
            />
        </div>
    );
}
