export default function ProfessionalProfileInputField({
    label,
    name,
    value,
    onChange,
    icon: Icon,
    disabled = false,
    placeholder = "",
    type = "text",
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
                {label}
            </span>
            <div className="relative">
                <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-slate-200 bg-[#f8f9fb] px-4 py-3 pl-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                />
            </div>
        </label>
    );
}
