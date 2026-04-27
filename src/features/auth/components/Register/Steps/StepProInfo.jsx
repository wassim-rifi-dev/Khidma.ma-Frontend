import { FiChevronDown, FiMapPin } from "react-icons/fi";
import { services } from "../../../../../shared/constants/Services";

export default function StepProInfo({ form, handleChange, setStep, isSubmitting, error }) {
    const isDisabled = isSubmitting || !form.category.trim() || !form.city.trim() || !form.description.trim();

    return (
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <div className="mb-6 text-center sm:mb-8">
                <h2 className="text-lg font-bold text-slate-800 sm:text-xl md:text-2xl">
                    Professional Details
                </h2>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Tell us about your services so clients can find you more easily.
                </p>
            </div>

            <div className="mx-auto w-full max-w-md space-y-4 sm:space-y-5">
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Service Category
                    </label>

                    <div className="relative">
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-sm text-slate-500 transition-colors focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                        >
                            <option value="" disabled>Select a category</option>
                            {services.map((service, index) => (
                                <option key={index} value={service.value}>
                                    {service.title}
                                </option>
                            ))}
                        </select>

                        <FiChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        City
                    </label>

                    <div className="relative">
                        <select
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-sm text-slate-500 transition-colors focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                        >
                            <option value="" disabled>Select your city</option>
                            <option value="casablanca">Casablanca</option>
                            <option value="rabat">Rabat</option>
                            <option value="fes">Fes</option>
                        </select>

                        <FiMapPin className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Professional Description
                    </label>

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="4"
                        disabled={isSubmitting}
                        placeholder="Briefly describe your experience and the specific services you offer..."
                        className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                    ></textarea>
                </div>
            </div>

            {error ? (
                <p className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                </p>
            ) : null}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                <button
                    type="button"
                    onClick={() => {
                        setStep(2);
                    }}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Back
                </button>

                <button
                    type="submit"
                    disabled={isDisabled}
                    className="w-full rounded-xl bg-[rgb(255,120,31)] py-3 font-semibold text-white transition hover:bg-[#e96d17] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 sm:col-span-2"
                >
                    {isSubmitting ? "Creating account..." : "Enregistrer"}
                </button>
            </div>
        </div>
    );
}
