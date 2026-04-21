export default function Stats() {
    const stats = [
        { value: "12", label: "TOTAL REQUESTS" },
        { value: "09", label: "COMPLETED" },
        { value: "04", label: "REVIEWS GIVEN" },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="rounded-[24px] bg-white px-6 py-5 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                    <span className="text-[2rem] font-semibold leading-none text-orange-500">
                        {stat.value}
                    </span>
                    <p className="mt-2 text-[11px] font-semibold tracking-wide text-slate-500">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
