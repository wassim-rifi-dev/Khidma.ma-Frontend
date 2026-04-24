import { FiLoader, FiSearch, FiSlash, FiTrash2, FiUnlock } from "react-icons/fi";

function getFilterButtonClass(isActive) {
    return isActive
        ? "rounded-full bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#F97415]"
        : "rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600";
}

export default function UsersTable({
    activeFilter,
    feedback,
    loading,
    pendingAction,
    removeUser,
    searchQuery,
    setActiveFilter,
    setSearchQuery,
    toggleUserStatus,
    users,
}) {
    return (
        <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                    <FiSearch className="h-4 w-4 shrink-0" />
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search by name, email, username, or role..."
                        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </label>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setActiveFilter("all")}
                        className={getFilterButtonClass(activeFilter === "all")}
                    >
                        All users
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveFilter("active")}
                        className={getFilterButtonClass(activeFilter === "active")}
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveFilter("suspended")}
                        className={getFilterButtonClass(activeFilter === "suspended")}
                    >
                        Suspended
                    </button>
                </div>
            </div>

            {feedback ? (
                <div
                    className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                        feedback.type === "success"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                >
                    {feedback.message}
                </div>
            ) : null}

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
                    {loading ? (
                        <div className="px-5 py-10 text-center text-sm text-slate-500">
                            Loading users...
                        </div>
                    ) : users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id || user.email} className="grid grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600">
                                <div>
                                    <p className="font-semibold text-slate-900">{user.name}</p>
                                    {user.username ? (
                                        <span className="text-xs text-slate-400">@{user.username}</span>
                                    ) : null}
                                </div>
                                <span>{user.email}</span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${user.roleTone}`}>
                                    {user.role}
                                </span>
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${user.statusTone}`}>
                                    {user.status}
                                </span>
                                <span>{user.joined}</span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    {user.canToggleStatus ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => toggleUserStatus(user.id, !user.isActive)}
                                                disabled={pendingAction?.userId === user.id}
                                                className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition ${
                                                    user.isActive
                                                        ? "bg-rose-50 text-rose-600 hover:bg-rose-100"
                                                        : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                                                } disabled:cursor-not-allowed disabled:opacity-70`}
                                            >
                                                {pendingAction?.userId === user.id && pendingAction?.type === "status" ? (
                                                    <FiLoader className="h-4 w-4 animate-spin" />
                                                ) : user.isActive ? (
                                                    <FiSlash className="h-4 w-4" />
                                                ) : (
                                                    <FiUnlock className="h-4 w-4" />
                                                )}
                                                {user.isActive ? "Deactivate" : "Activate"}
                                            </button>
                                            {user.canDelete ? (
                                                <button
                                                    type="button"
                                                    onClick={() => removeUser(user.id)}
                                                    disabled={pendingAction?.userId === user.id}
                                                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                                                >
                                                    {pendingAction?.userId === user.id && pendingAction?.type === "delete" ? (
                                                        <FiLoader className="h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <FiTrash2 className="h-4 w-4" />
                                                    )}
                                                    Delete
                                                </button>
                                            ) : null}
                                        </>
                                    ) : (
                                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-500">
                                            Current admin
                                        </span>
                                    )}
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
