import {
    FiAward,
    FiCheckCircle,
    FiClock,
    FiDroplet,
    FiMapPin,
    FiMessageSquare,
    FiShield,
    FiStar,
    FiTool,
} from "react-icons/fi";
import { MdOutlineBathroom, MdOutlineWaterDrop } from "react-icons/md";

const services = [
    {
        icon: FiDroplet,
        title: "Leak Detection & Repair",
        description: "Fast and accurate identification of hidden leaks.",
    },
    {
        icon: MdOutlineBathroom,
        title: "Bathroom Installation",
        description: "Complete fitting of sinks, toilets, and showers.",
    },
    {
        icon: MdOutlineWaterDrop,
        title: "Water Heater Repair",
        description: "Servicing and replacing all major brands.",
    },
    {
        icon: FiTool,
        title: "Pipe Unblocking",
        description: "Clearing stubborn drain blockages efficiently.",
    },
];

const reviews = [
    {
        name: "Sara M.",
        location: "Casablanca",
        time: "2 weeks ago",
        rating: 5,
        avatar: "https://i.pravatar.cc/80?img=5",
        text: "Ahmed was incredibly professional and arrived exactly on time. He fixed our leaking sink in under an hour and left the area spotless. Highly recommend his services!",
    },
    {
        name: "Youssef B.",
        location: "Rabat",
        time: "1 month ago",
        rating: 4,
        avatarLetter: "Y",
        text: "Great work installing our new water heater. The price was fair and transparent from the start. Would definitely hire again for future plumbing needs.",
    },
];

const quickInfo = [
    { icon: FiTool, label: "Category", value: "Plumbing" },
    { icon: FiMapPin, label: "Service Area", value: "Casablanca & Suburbs" },
    { icon: FiClock, label: "Avg. Response Time", value: "~2 Hours" },
    { icon: FiShield, label: "Identity", value: "Verified", accent: true },
];

export default function Main() {
    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-[34px] bg-white px-6 py-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:px-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        <div className="relative h-28 w-28 shrink-0">
                            <img
                                src="https://i.pravatar.cc/160?img=12"
                                alt="Ahmed M."
                                className="h-full w-full rounded-full object-cover ring-4 ring-cyan-100"
                            />
                            <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#dfe8fb] text-slate-600 shadow-sm">
                                <FiCheckCircle className="h-3.5 w-3.5" />
                            </span>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                                    Ahmed M.
                                </h1>
                                <span className="rounded-full bg-[#dfe8fb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    Expert Plumber
                                </span>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                                <span className="inline-flex items-center gap-1.5">
                                    <FiMapPin className="h-4 w-4" />
                                    Casablanca, MA
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <FiStar className="h-4 w-4 fill-orange-400 text-orange-400" />
                                    <span>
                                        <strong className="font-semibold text-slate-900">4.9</strong>{" "}
                                        <span className="text-slate-400">(120+ reviews)</span>
                                    </span>
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600">
                                    Request Service
                                </button>
                                <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-200">
                                    <FiMessageSquare className="h-4 w-4" />
                                    Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="space-y-6">
                        <section className="rounded-[30px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                About Me
                            </h2>
                            <p className="mt-5 text-sm leading-8 text-slate-500">
                                With over 15 years of experience in residential and
                                commercial plumbing, I specialize in providing top-tier,
                                reliable solutions for all your water and pipe needs. From
                                minor leaks to complete bathroom renovations, I pride myself
                                on punctuality, transparent pricing, and leaving your home
                                cleaner than I found it. My goal is to ensure your plumbing
                                systems run flawlessly so you can have peace of mind.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {["15+ Years Exp.", "Speaks Arabic, French", "Insured"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-500"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Services Offered
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {services.map((service) => {
                                    const Icon = service.icon;

                                    return (
                                        <article
                                            key={service.title}
                                            className="rounded-[24px] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3ff] text-slate-700">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                                {service.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                                {service.description}
                                            </p>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Recent Work
                            </h2>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
                                    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
                                    "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=900&q=80",
                                ].map((src, index) => (
                                    <div
                                        key={src}
                                        className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                                    >
                                        <img
                                            src={src}
                                            alt={`Recent work ${index + 1}`}
                                            className="h-44 w-full object-cover"
                                        />
                                        <div className="bg-slate-900 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white">
                                            Safe for Work {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Customer Reviews
                            </h2>
                            <div className="mt-5 space-y-4">
                                {reviews.map((review) => (
                                    <article
                                        key={review.name}
                                        className="rounded-[24px] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                {review.avatar ? (
                                                    <img
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        className="h-11 w-11 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe8fb] text-sm font-semibold text-slate-600">
                                                        {review.avatarLetter}
                                                    </div>
                                                )}

                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">
                                                        {review.name}
                                                    </p>
                                                    <p className="text-xs text-slate-400">
                                                        {review.location} - {review.time}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1 text-orange-400">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <FiStar
                                                        key={`${review.name}-${index}`}
                                                        className={`h-4 w-4 ${index < review.rating ? "fill-current" : ""}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-7 text-slate-500">
                                            "{review.text}"
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="self-start rounded-[30px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] xl:sticky xl:top-24">
                        <h2 className="text-2xl font-semibold text-slate-900">Quick Info</h2>

                        <div className="mt-6 space-y-4">
                            {quickInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                                    >
                                        <div className="flex items-center gap-3 text-sm text-slate-500">
                                            <Icon className="h-4 w-4" />
                                            <span>{item.label}</span>
                                        </div>
                                        <span
                                            className={`text-sm font-medium ${item.accent ? "text-orange-500" : "text-slate-700"}`}
                                        >
                                            {item.value}
                                            {item.accent ? (
                                                <FiAward className="ml-1 inline h-4 w-4" />
                                            ) : null}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 space-y-3">
                            <button className="w-full rounded-full bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600">
                                Request Service
                            </button>
                            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-3.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200">
                                <FiMessageSquare className="h-4 w-4" />
                                Send Message
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
