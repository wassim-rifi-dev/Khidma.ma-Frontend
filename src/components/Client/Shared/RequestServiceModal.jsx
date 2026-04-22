import {
    FiCalendar,
    FiClock,
    FiDollarSign,
    FiMapPin,
    FiMessageSquare,
    FiSend,
    FiUser,
    FiX,
} from "react-icons/fi";
import useCreateRequestForm from "../../../hooks/useCreateRequestForm";

export default function RequestServiceModal({
    isOpen,
    onClose,
    serviceId,
    serviceTitle = "Selected service",
    professionalName = "Professional",
    location = "Morocco",
    price = "Contact for price",
}) {
    const { form, handleChange, handleSubmit } = useCreateRequestForm(serviceId, onClose);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-[30px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
                    aria-label="Close request modal"
                >
                    <FiX className="h-5 w-5" />
                </button>

                <div className="border-b border-slate-100 px-6 pb-6 pt-7 sm:px-8">
                    <span className="inline-flex rounded-full bg-[#dfe8fb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                        New Request
                    </span>
                    <h2 className="mt-4 pr-12 text-3xl font-semibold tracking-tight text-slate-900">
                        Request this service
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                        Share the main details and preferred timing so the professional can understand what you need.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-[1fr_220px]">
                        <div className="space-y-5">
                        <label className="block">
                            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                <FiMessageSquare className="h-4 w-4 text-orange-500" />
                                Request details
                            </span>
                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Describe what you need help with..."
                                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                            />
                        </label>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FiCalendar className="h-4 w-4 text-orange-500" />
                                    Preferred date
                                </span>
                                <input
                                    type="date"
                                    name="preferred_date"
                                    value={form.preferred_date}
                                    onChange={handleChange}
                                    required
                                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block">
                                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FiClock className="h-4 w-4 text-orange-500" />
                                    Preferred time
                                </span>
                                <input
                                    type="time"
                                    name="preferred_time"
                                    value={form.preferred_time}
                                    onChange={handleChange}
                                    required
                                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                                />
                            </label>
                        </div>

                        <label className="block">
                            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                <FiMapPin className="h-4 w-4 text-orange-500" />
                                Address
                            </span>
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                                placeholder="Add your address or neighborhood"
                                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                <FiDollarSign className="h-4 w-4 text-orange-500" />
                                Your offer price
                            </span>
                            <div className="flex h-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-orange-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100">
                                <input
                                    type="number"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                    required
                                    placeholder="Enter your budget"
                                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                />
                                <span className="flex items-center border-l border-slate-200 px-4 text-sm font-semibold text-slate-500">
                                    MAD
                                </span>
                            </div>
                        </label>
                        </div>

                        <aside className="self-start rounded-2xl bg-slate-50 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Summary
                        </p>
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900">
                            {serviceTitle}
                        </h3>

                        <div className="mt-5 space-y-4 text-sm">
                            <div className="flex items-start gap-3 text-slate-500">
                                <FiUser className="mt-0.5 h-4 w-4 text-orange-500" />
                                <span>{professionalName}</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-500">
                                <FiMapPin className="mt-0.5 h-4 w-4 text-orange-500" />
                                <span>{location}</span>
                            </div>
                            <div className="border-t border-slate-200 pt-4">
                                <p className="text-xs text-slate-400">Estimated price</p>
                                <p className="mt-1 text-xl font-semibold text-slate-900">{price}</p>
                            </div>
                        </div>
                        </aside>
                    </div>

                    <div className="flex flex-col-reverse gap-3 border-t border-slate-100 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full bg-slate-100 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                        >
                            <FiSend className="h-4 w-4" />
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
