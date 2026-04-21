export default function Stats() {
    return (
        <div className="flex gap-4">
            {[
                { value: "12", label: "TOTAL REQUESTS" },
                { value: "09", label: "COMPLETED" },
                { value: "04", label: "REVIEWS GIVEN" },
            ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center bg-white rounded-2xl shadow-sm border border-gray-100 px-10 py-4">
                    <span className="text-2xl font-bold text-orange-500">{stat.value}</span>
                    <span className="text-xs font-semibold text-gray-500 mt-1 tracking-wide">{stat.label}</span>
                </div>
            ))}
        </div>
    )
}