import { FiEdit2, FiEye, FiFilter, FiSearch, FiShield, FiSlash, FiUsers } from "react-icons/fi";
import useTotalUsersCount from "../../../hooks/admin/useTotalUsersCount";
import useActiveUsersCount from "../../../hooks/admin/useActiveUsersCount";
import useAdminsCount from "../../../hooks/admin/useAdminsCount";

const users = [
    {
        name: "Sara El Amrani",
        email: "sara@khidma.com",
        role: "Client",
        status: "Active",
        joined: "Apr 21, 2026",
        roleTone: "bg-sky-50 text-sky-600",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
    {
        name: "Youssef Benali",
        email: "youssef@khidma.com",
        role: "Professional",
        status: "Active",
        joined: "Apr 20, 2026",
        roleTone: "bg-orange-50 text-[#F97415]",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
    {
        name: "Imane Tahiri",
        email: "imane@khidma.com",
        role: "Client",
        status: "Suspended",
        joined: "Apr 18, 2026",
        roleTone: "bg-sky-50 text-sky-600",
        statusTone: "bg-rose-50 text-rose-600",
    },
    {
        name: "Admin Team",
        email: "admin@khidma.com",
        role: "Admin",
        status: "Active",
        joined: "Apr 23, 2026",
        roleTone: "bg-violet-50 text-violet-600",
        statusTone: "bg-emerald-50 text-emerald-600",
    },
];

export default function AdminUsersManagement() {
    const { totalUsersCount } = useTotalUsersCount();
    const { activeUsersCount } = useActiveUsersCount();
    const { adminsCount } = useAdminsCount();

    const summaryCards = [
        { label: "Total users", value: totalUsersCount },
        { label: "Active accounts", value: activeUsersCount },
        { label: "Admins", value: adminsCount },
    ];

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

            <section className="grid gap-6 md:grid-cols-3">
                {summaryCards.map((card) => (
                    <article key={card.label} className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                                <p className="mt-3 text-3xl font-bold text-slate-950">{card.value}</p>
                            </div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                                <FiUsers className="h-5 w-5" />
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                        <FiSearch className="h-4 w-4 shrink-0" />
                        <span>Search by name, email, or role...</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-full bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#F97415]">
                            All users
                        </button>
                        <button className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600">
                            Active
                        </button>
                        <button className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600">
                            Suspended
                        </button>
                        <button className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
                            <FiFilter className="h-4 w-4" />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[20px] border border-slate-200">
                    <div className="grid grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_0.9fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        <span>User</span>
                        <span>Email</span>
                        <span>Role</span>
                        <span>Status</span>
                        <span>Joined</span>
                        <span>Actions</span>
                    </div>

                    <div className="divide-y divide-slate-200">
                        {users.map((user) => (
                            <div key={user.email} className="grid grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600">
                                <span className="font-semibold text-slate-900">{user.name}</span>
                                <span>{user.email}</span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${user.roleTone}`}>
                                    {user.role}
                                </span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${user.statusTone}`}>
                                    {user.status}
                                </span>
                                <span>{user.joined}</span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-[#F97415]">
                                        <FiEye className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-[#F97415]">
                                        <FiEdit2 className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-full bg-slate-100 p-2 transition hover:text-rose-500">
                                        <FiSlash className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
