export default function RequestFilters({ filters, activeFilter, onFilterChange }) {
    return (
        <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-50 p-2">
            {filters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                    <button
                        key={filter.value}
                        type="button"
                        onClick={() => onFilterChange(filter.value)}
                        className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                            isActive
                                ? "bg-[#ff781f] text-white shadow-sm"
                                : "text-slate-500 hover:bg-white hover:text-slate-900"
                        }`}
                    >
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
}
