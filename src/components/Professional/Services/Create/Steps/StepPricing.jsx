import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function PriceField({
    label,
    name,
    value,
    onChange,
    placeholder,
    hint,
    disabled = false,
    optional = false,
}) {
    return (
        <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                {label}
                {optional ? <span className="ml-1 font-normal text-slate-400">(Optional)</span> : null}
            </label>

            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                    MAD
                </span>

                <input
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="w-full pl-14 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
                />
            </div>

            <p className="text-slate-500 text-xs sm:text-sm mt-1">{hint}</p>
        </div>
    );
}

export default function StepPricing({ form, handleChange, setStep }) {
    // const isStepValid = form.price_min.trim();

    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8">
            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                    Set Your Pricing
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Define how much your service costs and whether pricing starts from a base amount.
                </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3">
                    <div>
                        <p className="text-sm font-semibold text-slate-700">
                            Starting Price Model
                        </p>

                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                            Enable this if the final cost can vary depending on the client request.
                        </p>
                    </div>

                    <label className="relative inline-flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            name="hasStartingPrice"
                            checked={form.hasStartingPrice}
                            onChange={handleChange}
                            className="peer sr-only"
                        />

                        <span className="relative h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-[rgb(255,120,31)] after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:after:translate-x-5" />
                    </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <PriceField
                        label="Base Price"
                        name="price_min"
                        value={form.price_min}
                        onChange={handleChange}
                        placeholder="0.00"
                        hint={form.hasStartingPrice ? "The minimum amount you will charge." : "Set the fixed price clients will pay."}
                    />

                    <PriceField
                        label="Maximum Price"
                        optional
                        name="price_max"
                        value={form.price_max}
                        onChange={handleChange}
                        placeholder="0.00"
                        hint={form.hasStartingPrice ? "Leave blank if there is no upper limit." : "Disabled when the price is fixed."}
                        disabled={!form.hasStartingPrice}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">

                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                    Back
                </button>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 sm:col-span-2"
                    onClick={() => setStep(3)}
                    disabled={
                        !form.price_min.trim()
                    }
                >
                    Continue
                    <FaArrowRight size={14} />
                </button>

            </div>
        </div>
    );
}
