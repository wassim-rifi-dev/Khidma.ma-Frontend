export default function ProfileInputField({
    label,
    defaultValue,
    icon: Icon,
    inputClassName,
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
                {label}
            </span>
            <div className="relative">
                <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                    defaultValue={defaultValue}
                    className={inputClassName}
                />
            </div>
        </label>
    );
}
