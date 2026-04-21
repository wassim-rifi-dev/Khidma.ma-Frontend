export default function RecentRequestsMessage({ message, description = null }) {
    return (
        <div className="rounded-[22px] bg-[#f5f5f3] px-4 py-6 text-center">
            <p className="text-sm font-semibold text-slate-700">{message}</p>
            {description ? (
                <p className="mt-1 text-xs text-slate-400">{description}</p>
            ) : null}
        </div>
    );
}
