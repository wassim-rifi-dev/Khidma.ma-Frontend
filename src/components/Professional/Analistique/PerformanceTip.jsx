import { FiZap } from "react-icons/fi";

export default function PerformanceTip() {
    return (
        <section className="relative min-h-64 overflow-hidden rounded-[28px] bg-orange-50 p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500">
                <FiZap className="h-5 w-5 fill-current" />
            </span>

            <div className="mt-5 max-w-md">
                <h2 className="text-2xl font-bold text-slate-900">Improve your performance</h2>
                <p className="mt-3 text-base leading-7 text-stone-600">
                    Respond to requests within 15 minutes to increase your visibility. Complete your profile details to
                    gain more trust.
                </p>
            </div>

            <button
                type="button"
                className="mt-7 rounded-2xl bg-orange-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_12px_26px_rgba(234,88,12,0.24)] transition hover:bg-orange-700"
            >
                Improve Profile
            </button>

            <div className="absolute -bottom-16 right-3 h-32 w-32 rotate-45 bg-white/45" />
        </section>
    );
}
