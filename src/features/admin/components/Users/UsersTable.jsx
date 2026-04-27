import { useState } from "react";
import { FiEye, FiLoader, FiMail, FiPhone, FiSearch, FiShield, FiSlash, FiTrash2, FiUnlock, FiUser } from "react-icons/fi";
import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import AdminActionConfirmModal from "../Shared/AdminActionConfirmModal";
import getUserPhotoUrl from "../../../../shared/utils/getUserPhotoUrl";

function UserViewModal({ user, onClose }) {
    if (!user) {
        return null;
    }

    const photoUrl = getUserPhotoUrl(user.photo);
    const initials = `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || user.name?.charAt(0) || ""}`.trim() || "U";

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
            <div className="w-full max-w-2xl rounded-[28px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">User profile</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-950">{user.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">Account overview for admin review.</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
                    >
                        Close
                    </button>
                </div>

                <div className="space-y-5 px-6 py-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-xl font-bold text-slate-600 ring-4 ring-orange-50">
                            {photoUrl ? (
                                <img
                                    src={photoUrl || defaultProfile}
                                    alt={user.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                initials
                            )}
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                    {user.username ? `@${user.username}` : "No username"}
                                </span>
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${user.roleTone}`}>
                                    {user.role}
                                </span>
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${user.statusTone}`}>
                                    {user.status}
                                </span>
                            </div>
                            <p className="text-sm text-slate-500">Joined {user.joined}</p>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">First name</p>
                            <p className="mt-2 text-base font-semibold text-slate-900">
                                {user.firstName || "Not provided"}
                            </p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Last name</p>
                            <p className="mt-2 text-base font-semibold text-slate-900">
                                {user.lastName || "Not provided"}
                            </p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-slate-500">
                                <FiMail className="h-4 w-4" />
                                <span className="text-sm">Email</span>
                            </div>
                            <p className="mt-2 break-all text-base font-semibold text-slate-900">{user.email}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-slate-500">
                                <FiPhone className="h-4 w-4" />
                                <span className="text-sm">Phone</span>
                            </div>
                            <p className="mt-2 text-base font-semibold text-slate-900">{user.phone}</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                            <FiUser className="h-4 w-4" />
                            <span className="text-sm">Username</span>
                        </div>
                        <p className="mt-2 text-base font-semibold text-slate-900">
                            {user.username ? `@${user.username}` : "No username"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
    const [selectedUser, setSelectedUser] = useState(null);
    const [confirmState, setConfirmState] = useState(null);

    return (
        <>
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
                                        <button
                                            type="button"
                                            onClick={() => setSelectedUser(user)}
                                            title="View user"
                                            aria-label="View user"
                                            className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2.5 text-slate-600 transition hover:bg-slate-200"
                                        >
                                            <FiEye className="h-4 w-4" />
                                        </button>
                                        {user.canToggleStatus ? (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setConfirmState({
                                                            title: user.isActive ? "Deactivate user" : "Activate user",
                                                            message: `Are you sure you want to ${user.isActive ? "deactivate" : "activate"} ${user.name}?`,
                                                            confirmLabel: user.isActive ? "Deactivate" : "Activate",
                                                            confirmTone: user.isActive ? "danger" : "success",
                                                            onConfirm: () => toggleUserStatus(user.id, !user.isActive),
                                                            userId: user.id,
                                                            type: "status",
                                                        })
                                                    }
                                                    disabled={pendingAction?.userId === user.id}
                                                    title={user.isActive ? "Deactivate user" : "Activate user"}
                                                    aria-label={user.isActive ? "Deactivate user" : "Activate user"}
                                                    className={`inline-flex items-center justify-center rounded-full p-2.5 transition ${
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
                                                </button>
                                                {user.canDelete ? (
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setConfirmState({
                                                                title: "Delete user",
                                                                message: `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
                                                                confirmLabel: "Delete",
                                                                confirmTone: "danger",
                                                                onConfirm: () => removeUser(user.id),
                                                                userId: user.id,
                                                                type: "delete",
                                                            })
                                                        }
                                                        disabled={pendingAction?.userId === user.id}
                                                        title="Delete user"
                                                        aria-label="Delete user"
                                                        className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2.5 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                                                    >
                                                        {pendingAction?.userId === user.id && pendingAction?.type === "delete" ? (
                                                            <FiLoader className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <FiTrash2 className="h-4 w-4" />
                                                        )}
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

            <UserViewModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            <AdminActionConfirmModal
                isOpen={Boolean(confirmState)}
                title={confirmState?.title}
                message={confirmState?.message}
                confirmLabel={confirmState?.confirmLabel}
                confirmTone={confirmState?.confirmTone}
                isLoading={
                    pendingAction?.userId === confirmState?.userId &&
                    pendingAction?.type === confirmState?.type
                }
                onClose={() => {
                    if (!pendingAction) {
                        setConfirmState(null);
                    }
                }}
                onConfirm={async () => {
                    await confirmState?.onConfirm?.();
                    setConfirmState(null);
                }}
            />
        </>
    );
}
