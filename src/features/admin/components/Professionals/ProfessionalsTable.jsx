import { FiCheckCircle, FiLoader, FiMapPin, FiSearch, FiSlash } from "react-icons/fi";
import { useState } from "react";
import AdminActionConfirmModal from "../Shared/AdminActionConfirmModal";
import { getAdminFilterButtonClass } from "../../../../shared/utils/Helpers/admin/Filters";

export default function ProfessionalsTable({
    activeFilter,
    feedback,
    loading,
    pendingProfessionalId,
    professionals,
    searchQuery,
    setActiveFilter,
    setSearchQuery,
    toggleVerification,
}) {
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
                            placeholder="Search by name, specialty, city, or username..."
                            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        />
                    </label>

                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setActiveFilter("all")}
                            className={getAdminFilterButtonClass(activeFilter === "all")}
                        >
                            All professionals
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveFilter("verified")}
                            className={getAdminFilterButtonClass(activeFilter === "verified")}
                        >
                            Verified
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveFilter("pending")}
                            className={getAdminFilterButtonClass(activeFilter === "pending")}
                        >
                            Pending
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
                    <div className="grid grid-cols-[1.15fr_1fr_0.8fr_0.8fr_0.9fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        <span>Professional</span>
                        <span>Specialty</span>
                        <span>City</span>
                        <span>Status</span>
                        <span>Joined</span>
                        <span>Actions</span>
                    </div>

                    <div className="divide-y divide-slate-200">
                        {loading ? (
                            <div className="px-5 py-10 text-center text-sm text-slate-500">
                                Loading professionals...
                            </div>
                        ) : professionals.length > 0 ? (
                            professionals.map((professional) => (
                                <div
                                    key={professional.id || `${professional.name}-${professional.joined}`}
                                    className="grid grid-cols-[1.15fr_1fr_0.8fr_0.8fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600"
                                >
                                    <div>
                                        <p className="font-semibold text-slate-900">{professional.name}</p>
                                        {professional.username ? (
                                            <span className="text-xs text-slate-400">@{professional.username}</span>
                                        ) : null}
                                        <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${professional.availabilityTone}`}>
                                            {professional.availability}
                                        </span>
                                    </div>
                                    <span>{professional.specialty}</span>
                                    <span className="flex items-center gap-1.5">
                                        <FiMapPin className="h-4 w-4 text-slate-400" />
                                        {professional.city}
                                    </span>
                                    <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${professional.statusTone}`}>
                                        {professional.status}
                                    </span>
                                    <span>{professional.joined}</span>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setConfirmState({
                                                    title: professional.isVerified ? "Remove verification" : "Verify professional",
                                                    message: `Are you sure you want to ${professional.isVerified ? "remove verification from" : "verify"} ${professional.name}?`,
                                                    confirmLabel: professional.isVerified ? "Unverify" : "Verify",
                                                    confirmTone: professional.isVerified ? "danger" : "success",
                                                    onConfirm: () => toggleVerification(professional.id, !professional.isVerified),
                                                    professionalId: professional.id,
                                                })
                                            }
                                            disabled={pendingProfessionalId === professional.id}
                                            title={professional.isVerified ? "Unverify professional" : "Verify professional"}
                                            aria-label={professional.isVerified ? "Unverify professional" : "Verify professional"}
                                            className={`inline-flex items-center justify-center rounded-full p-2.5 transition ${
                                                professional.isVerified
                                                    ? "bg-rose-50 text-rose-600 hover:bg-rose-100"
                                                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                                            } disabled:cursor-not-allowed disabled:opacity-70`}
                                        >
                                            {pendingProfessionalId === professional.id ? (
                                                <FiLoader className="h-4 w-4 animate-spin" />
                                            ) : professional.isVerified ? (
                                                <FiSlash className="h-4 w-4" />
                                            ) : (
                                                <FiCheckCircle className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="px-5 py-10 text-center text-sm text-slate-500">
                                No professionals found.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <AdminActionConfirmModal
                isOpen={Boolean(confirmState)}
                title={confirmState?.title}
                message={confirmState?.message}
                confirmLabel={confirmState?.confirmLabel}
                confirmTone={confirmState?.confirmTone}
                isLoading={pendingProfessionalId === confirmState?.professionalId}
                onClose={() => {
                    if (!pendingProfessionalId) {
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
