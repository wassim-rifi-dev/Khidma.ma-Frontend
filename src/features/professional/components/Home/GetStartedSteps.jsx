import { Link } from "react-router-dom";
import { FiCheckCircle, FiCreditCard, FiTool, FiUser } from "react-icons/fi";

export default function GetStartedSteps({ professional, hasPhoto, hasDescription, hasServices, completedSteps }) {
    const requestsCount = professional?.requests_count || 0;
    const steps = [
        {
            title: "Complete your profile",
            description: "Add your photo, bio, and experience to build trust with clients.",
            icon: FiUser,
            action: "Edit Profile",
            href: "/professional/profile/edit",
            status: hasPhoto || hasDescription ? "completed" : "pending",
        },
        {
            title: "Create your first service",
            description: "List what you offer, set your price, and define your availability.",
            icon: FiTool,
            action: hasServices ? "Manage Services" : "Create Service",
            href: hasServices ? "/professional/services" : "/professional/services/create",
            status: hasServices ? "completed" : "pending",
        },
        {
            title: "Start receiving requests",
            description: "Once your services are live, clients can start booking you directly.",
            icon: FiCreditCard,
            action: requestsCount > 0 ? "View Requests" : null,
            href: requestsCount > 0 ? "/professional/requests" : null,
            status: requestsCount > 0 ? "completed" : "locked",
        },
    ];

    const nextStepIndex = steps.findIndex((step) => step.status === "pending");

    return (
        <section className="mt-10">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Get Started in 3 Steps</h2>
                    <p className="mt-1 text-base text-slate-600">Complete these to activate your account.</p>
                </div>

                <span className="w-fit rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-[#A34E0D]">
                    {completedSteps}/3 Completed
                </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {steps.map(({ title, description, icon: Icon, action, href, status }, index) => {
                    const highlighted = index === nextStepIndex;
                    const completed = status === "completed";
                    const disabled = status === "locked";

                    return (
                        <article
                            key={title}
                            className={`relative min-h-[190px] rounded-[18px] border bg-white p-7 shadow-[0_16px_38px_rgba(15,23,42,0.05)] ${
                                highlighted ? "border-orange-200" : "border-transparent"
                            } ${disabled ? "opacity-55" : ""}`}
                        >
                            {highlighted ? (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F97415] px-5 py-1 text-[11px] font-bold tracking-[0.08em] text-white">
                                    NEXT STEP
                                </span>
                            ) : null}

                            <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-full ${
                                completed
                                    ? "bg-emerald-100 text-emerald-600"
                                    : highlighted
                                        ? "bg-orange-100 text-[#F97415]"
                                        : "bg-slate-100 text-slate-700"
                            }`}>
                                {completed ? <FiCheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                            </div>

                            <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                            <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{description}</p>

                            {action && href ? (
                                <Link
                                    to={href}
                                    className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-orange-50 text-sm font-semibold text-[#F97415] transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                                >
                                    {action}
                                </Link>
                            ) : null}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
