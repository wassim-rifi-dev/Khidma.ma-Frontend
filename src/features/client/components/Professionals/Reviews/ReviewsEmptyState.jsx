export default function ReviewsEmptyState({ children }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {children}
        </div>
    );
}
