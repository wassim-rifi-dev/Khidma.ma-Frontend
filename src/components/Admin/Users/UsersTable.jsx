import { FiEdit2, FiEye, FiFilter, FiSearch, FiSlash } from "react-icons/fi";

export default function UsersTable({ users }) {
    return (
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
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id || user.email} className="grid grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600">
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
                        ))
                    ) : (
                        <div className="px-5 py-10 text-center text-sm text-slate-500">
                            No users found.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
