import { FiChevronDown, FiMapPin } from 'react-icons/fi';
import { services } from '../../../../data/Services';

export default function StepProInfo({ form, handleChange, setStep }) {
    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8">

            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                    Professional Details
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Tell us about your services so clients can find you more easily.
                </p>
            </div>

            <div className="max-w-md w-full mx-auto space-y-4 sm:space-y-5">

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Service Category
                    </label>

                    <div className="relative">
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-500 appearance-none focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors cursor-pointer"
                        >
                            <option value="" disabled>Select a category</option>

                            {
                                services.map((service, index) => (
                                    <option key={index} value={service.value}>
                                        {service.title}
                                    </option>
                                ))
                            }

                        </select>

                        <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        City
                    </label>

                    <div className="relative">
                        <select
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-500 appearance-none focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors cursor-pointer"
                        >
                            <option value="" disabled>Select your city</option>
                            <option value="casablanca">Casablanca</option>
                            <option value="rabat">Rabat</option>
                            <option value="fes">Fes</option>
                        </select>

                        <FiMapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Professional Description
                    </label>

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Briefly describe your experience and the specific services you offer..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors resize-none"
                    ></textarea>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">

                <button
                    type="button"
                    onClick={() => {setStep(2)}}
                    className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                    Back
                </button>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 sm:col-span-2"
                >
                    Enregistrer
                </button>

            </div>

        </div>
    );
}