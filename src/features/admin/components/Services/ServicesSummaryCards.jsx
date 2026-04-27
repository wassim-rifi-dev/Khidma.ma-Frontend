import { FiLayers } from "react-icons/fi";

export default function ServicesSummaryCards({ cards }) {
    return (
        <section className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
                <article key={card.label} className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">{card.label}</p>
                            <p className="mt-3 text-3xl font-bold text-slate-950">{card.value}</p>
                        </div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                            <FiLayers className="h-5 w-5" />
                        </span>
                    </div>
                </article>
            ))}
        </section>
    );
}
