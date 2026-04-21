import { FiChevronDown } from "react-icons/fi";

export default function SearchBox({ icon: Icon, placeholder, value, hasChevron = false }) {
    return (
        <div className="flex h-14 items-center gap-3 rounded-2xl bg-[#f5f7fb] px-4 text-slate-400">
            <Icon className="h-5 w-5 shrink-0" />
            <span className="flex-1 text-sm">{value || placeholder}</span>
            {hasChevron ? <FiChevronDown className="h-4 w-4 shrink-0" /> : null}
        </div>
    );
}
