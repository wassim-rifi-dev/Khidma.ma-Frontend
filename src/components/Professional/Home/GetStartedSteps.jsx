import { Link } from "react-router-dom";
import { FiCreditCard, FiTool, FiUser } from "react-icons/fi";

const steps = [
    {
        title: "Complete your profile",
        description: "Add your photo, bio, and experience to build trust with clients.",
        icon: FiUser,
        action: "Edit Profile",
        href: "/professional/profile",
        status: "completed",
    },
    {
        title: "Create your first service",
        description: "List what you offer, set your price, and define your availability.",
        icon: FiTool,
        action: "Create Service",
        highlighted: true,
    },
    {
        title: "Start receiving requests",
        description: "Once your services are live, clients can start booking you directly.",
        icon: FiCreditCard,
        disabled: true,
    },
];

export default function GetStartedSteps() {
    return (
        <section className="mt-10">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-950">Get Started in 3 Steps</h2>
                    <p className="mt-1 text-base text-slate-600">Complete these to activate your account.</p>
                </div>

                <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-[#A34E0D]">
                    0/3 Completed
                </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {steps.map(({ title, description, icon: Icon, action, href, highlighted, disabled }) => (
                    <article
                        key={title}
                        className={`relative min-h-[190px] rounded-[18px] border bg-white p-7 shadow-[0_16px_38px_rgba(15,23,42,0.05)] ${
                            highlighted ? "border-orange-200" : "border-transparent"
                        } ${disabled ? "opacity-55" : ""}`}
                    >
                        {highlighted && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F97415] px-5 py-1 text-[11px] font-bold tracking-[0.08em] text-white">
                                NEXT STEP
                            </span>
                        )}

                        <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-full ${
                            highlighted ? "bg-orange-100 text-[#F97415]" : "bg-slate-100 text-slate-700"
                        }`}>
                            <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                        <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{description}</p>

                        {action && href && (
                            <Link
                                to={href}
                                className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-orange-50 text-sm font-semibold text-[#F97415] transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                            >
                                {action}
                            </Link>
                        )}

                        {action && !href && (
                            <button
                                type="button"
                                className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-[#F97415] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,116,21,0.22)] transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                            >
                                {action}
                            </button>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
