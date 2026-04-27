export default function ProfessionalStateCard({ tone = "default", children }) {
    const toneClassName = tone === "error"
        ? "border-red-100 bg-red-50 text-red-600"
        : "border-slate-100 bg-white text-slate-500";

    return (
        <section className={`mx-auto mt-10 w-full max-w-6xl rounded-2xl border p-8 text-center shadow-sm ${toneClassName}`}>
            {children}
        </section>
    );
}
