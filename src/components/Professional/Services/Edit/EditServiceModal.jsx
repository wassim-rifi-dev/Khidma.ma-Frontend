import { FiMapPin, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { FiFileText, FiTool } from "react-icons/fi";
import useEditServiceForm from "../../../../hooks/useEditServiceForm";

function FieldLabel({ children }) {
    return (
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            {children}
        </label>
    );
}

function PriceField({ label, name, value, onChange, placeholder, disabled = false, optional = false }) {
    return (
        <div>
            <FieldLabel>
                {label}
                {optional ? <span className="ml-1 font-normal text-slate-400">(Optional)</span> : null}
            </FieldLabel>

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
        </div>
    );
}

export default function EditServiceModal({ service, isOpen, onClose, onSave }) {
    const { form, isValid, handleChange, handleSubmit } = useEditServiceForm(service, onSave);

    if (!isOpen || !service) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Edit Service</h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Update the details clients see for this service.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Close edit service modal"
                    >
                        <FiX className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5 sm:p-6">
                    <div className="space-y-4 sm:space-y-5">
                        <div>
                            <FieldLabel>Service Title</FieldLabel>
                            <div className="relative">
                                <FiTool className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Professional Plumbing Repair"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <FieldLabel>City</FieldLabel>
                            <div className="relative">
                                <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="Casablanca"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <FieldLabel>Description</FieldLabel>
                            <div className="relative">
                                <FiFileText className="absolute left-3.5 top-4 text-slate-400 text-lg" />
                                <textarea
                                    name="description"
                                    rows="4"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Describe what is included and what clients can expect."
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">Starting Price Model</p>
                                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                    Enable this if the final cost depends on the request.
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
                            />

                            <PriceField
                                label="Maximum Price"
                                optional
                                name="price_max"
                                value={form.price_max}
                                onChange={handleChange}
                                placeholder="0.00"
                                disabled={!form.hasStartingPrice}
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full sm:w-auto rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(255,120,31)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                        >
                            Save Changes
                            <FaArrowRight size={13} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
