import { FiCheckCircle, FiEdit3, FiInbox, FiStar } from "react-icons/fi";

const activityItems = [
    {
        label: "Total Requests",
        value: "342",
        icon: FiInbox,
        color: "bg-orange-100 text-orange-500",
    },
    {
        label: "Completed Jobs",
        value: "318",
        icon: FiCheckCircle,
        color: "bg-sky-100 text-sky-500",
    },
    {
        label: "Avg. Rating",
        value: "4.9",
        icon: FiStar,
        color: "bg-slate-100 text-slate-500",
    },
];

export default function AboutActivitySection() {
    return (
        <section className="mx-auto mt-6 grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="rounded-[30px] border border-slate-100 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">About</h3>
                    <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
                    >
                    </button>
                </div>

                <p className="max-w-3xl text-base leading-8 text-slate-500">
                    With over 15 years of experience in residential and commercial plumbing, I specialize in rapid emergency response and complex leak detection. My commitment is to provide transparent pricing, clean workmanship, and durable solutions for every client in the Casablanca region. Fully certified and insured.
                </p>
            </article>

            <aside className="rounded-[30px] border border-slate-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Your activity</h3>

                <div className="mt-8 space-y-6">
                    {activityItems.map(({ label, value, icon: Icon, color }) => (
                        <div key={label} className="flex items-center justify-between gap-5">
                            <div className="flex min-w-0 items-center gap-4">
                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color}`}>
                                    <Icon className="h-5 w-5" />
                                </span>
                                <span className="truncate text-sm font-semibold text-slate-500">{label}</span>
                            </div>

                            <span className="text-lg font-bold text-slate-900">{value}</span>
                        </div>
                    ))}
                </div>
            </aside>
        </section>
    );
}
