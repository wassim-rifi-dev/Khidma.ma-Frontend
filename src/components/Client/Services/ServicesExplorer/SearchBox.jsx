import { FiChevronDown } from "react-icons/fi";
import { useMemo, useState } from "react";

export default function SearchBox({
    icon: Icon,
    name,
    placeholder,
    value,
    hasChevron = false,
    onChange,
    options = [],
}) {
    const isSelect = hasChevron && options.length > 0;
    const [isOpen, setIsOpen] = useState(false);
    const normalizedValue = value.toLowerCase();
    const filteredOptions = useMemo(() => {
        if (!isSelect) {
            return [];
        }

        return options.filter((option) =>
            option.toLowerCase().includes(normalizedValue)
        );
    }, [isSelect, options, normalizedValue]);

    function handleSelect(option) {
        onChange({
            target: {
                name,
                value: option,
            },
        });
        setIsOpen(false);
    }

    return (
        <div className="relative">
            <div className="flex h-14 items-center gap-3 rounded-2xl bg-[#f5f7fb] px-4 text-slate-400">
            <Icon className="h-5 w-5 shrink-0" />
            {isSelect ? (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsOpen(true)}
                    placeholder={placeholder}
                    className="h-full flex-1 bg-transparent text-sm text-slate-500 outline-none placeholder:text-slate-400"
                />
            ) : (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="h-full flex-1 bg-transparent text-sm text-slate-500 outline-none placeholder:text-slate-400"
                />
            )}
            {hasChevron ? (
                <FiChevronDown
                    className="h-4 w-4 shrink-0 cursor-pointer"
                    onClick={() => setIsOpen((currentValue) => !currentValue)}
                />
            ) : null}
            </div>

            {isSelect && isOpen ? (
                <div className="absolute z-20 mt-2 max-h-56 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onMouseDown={() => handleSelect(option)}
                                className="block w-full px-4 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-50"
                            >
                                {option}
                            </button>
                        ))
                    ) : (
                        <p className="px-4 py-2 text-sm text-slate-400">
                            No matching results
                        </p>
                    )}
                </div>
            ) : null}
        </div>
    );
}
