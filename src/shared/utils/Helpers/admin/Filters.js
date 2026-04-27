export function getAdminFilterButtonClass(isActive) {
    return isActive
        ? "rounded-full bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#F97415]"
        : "rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600";
}
