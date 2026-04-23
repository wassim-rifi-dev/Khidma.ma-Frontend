import { FaArrowRight } from "react-icons/fa";
import { FiChevronDown, FiFileText, FiMapPin, FiTool } from "react-icons/fi";

export default function StepSimpleInfo() {
    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8">
            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                    Service Information
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Add the main details clients will see before they request your service.
                </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Service Title
                    </label>

                    <div className="relative">
                        <FiTool className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                        <input
                            type="text"
                            name="title"
                            placeholder="Professional Plumbing Repair"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        City
                    </label>

                    <div className="relative">
                        <select
                            name="city"
                            defaultValue=""
                            className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-500 appearance-none focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors cursor-pointer"
                        >
                            <option value="" disabled>Where do you work?</option>
                            <option value="casablanca">Casablanca</option>
                            <option value="rabat">Rabat</option>
                            <option value="marrakech">Marrakech</option>
                            <option value="fes">Fes</option>
                            <option value="tangier">Tangier</option>
                            <option value="other">Other</option>
                        </select>

                        <FiMapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Description
                    </label>

                    <div className="relative">
                        <FiFileText className="absolute left-3.5 top-4 text-slate-400 text-lg" />

                        <textarea
                            name="description"
                            rows="5"
                            placeholder="Describe your service, what is included, and what clients can expect from your work."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors resize-none"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">
                <button
                    type="button"
                    className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                    Back
                </button>

                <button
                    className="w-full flex items-center justify-center gap-2 bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] sm:col-span-2"
                >
                    Continue
                    <FaArrowRight size={14} />
                </button>
            </div>
        </div>
    );
}
