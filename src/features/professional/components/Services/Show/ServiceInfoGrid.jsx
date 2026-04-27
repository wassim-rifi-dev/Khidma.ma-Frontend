import { FiCheckCircle } from "react-icons/fi";

export default function ServiceInfoGrid({ items }) {
    return (
        <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Service information</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600"
                    >
                        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                            <FiCheckCircle className="h-4 w-4 text-emerald-500" />
                            {item.title}
                        </p>
                        <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                    </div>
                ))}
            </div>
        </article>
    );
}

