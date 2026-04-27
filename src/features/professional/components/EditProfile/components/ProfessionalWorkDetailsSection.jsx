import { FiMapPin, FiTag } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfessionalProfileInputField from "./ProfessionalProfileInputField";

export default function ProfessionalWorkDetailsSection({
    form,
    onChange,
    categories,
    categoryName,
    submitError,
    isLoading,
    isSubmitting,
}) {
    return (
        <div className="pt-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
                    Professional Details
                </h2>
                <p className="text-sm leading-6 text-slate-500">
                    Keep your service area and professional description up to date so clients know what to expect.
                </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <ProfessionalProfileInputField
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={onChange}
                    icon={FiMapPin}
                    disabled={isLoading}
                    placeholder="Casablanca"
                />

                <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Category
                    </span>
                    <div className="relative">
                        <FiTag className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            value={categoryName || categories.find((category) => String(category.id) === String(form.category_id))?.name || ""}
                            disabled
                            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 pl-10 text-sm text-slate-500 outline-none"
                        />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">
                        Category changes are managed during registration for now.
                    </p>
                </label>
            </div>

            <div className="mt-5">
                <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Professional Description
                    </span>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        rows="6"
                        disabled={isLoading}
                        placeholder="Tell clients about your experience, specialty, and what makes your work reliable."
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                    />
                </label>
            </div>

            {submitError ? (
                <p className="mt-5 text-sm font-medium text-red-500">{submitError}</p>
            ) : null}

            <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-end">
                <Link
                    to="/professional/profile"
                    className="px-3 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={isSubmitting || isLoading}
                    className="rounded-2xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
                >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
