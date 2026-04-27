export default function AdminActionConfirmModal({
    isOpen,
    title,
    message,
    confirmLabel = "Confirm",
    confirmTone = "danger",
    onConfirm,
    onClose,
    isLoading = false,
}) {
    if (!isOpen) {
        return null;
    }

    const confirmClassName = confirmTone === "success"
        ? "bg-emerald-500 text-white hover:bg-emerald-600"
        : "bg-rose-500 text-white hover:bg-rose-600";

    return (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Confirm action</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{message}</p>

                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isLoading}
                        className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`rounded-full px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 ${confirmClassName}`}
                    >
                        {isLoading ? "Processing..." : confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
