import { Link } from "react-router-dom";
import { FiCamera, FiCheck, FiImage, FiPlus } from "react-icons/fi";

export default function ProfessionalHomePanels() {
    return (
        <section className="mt-10 space-y-8">
            <div className="grid grid-cols-2 gap-8">
                <article className="flex min-h-[330px] flex-col items-center justify-center rounded-[26px] bg-white p-10 text-center shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div className="mb-7 h-32 w-32 overflow-hidden rounded-full bg-slate-100 shadow-inner">
                        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#e9ece7_36%,#5b5f55_100%)]">
                            <div className="h-8 w-12 rounded-sm border-2 border-slate-500 bg-slate-100 shadow-sm" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-950">You haven't added any services yet</h2>
                    <p className="mt-3 max-w-sm text-base leading-7 text-slate-600">
                        Your profile is hidden until you add at least one service offering.
                    </p>

                    <button
                        type="button"
                        className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F97415] px-8 text-sm font-bold text-white shadow-[0_12px_24px_rgba(249,116,21,0.22)] transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                    >
                        <FiPlus className="h-4 w-4" />
                        Create Service
                    </button>
                </article>

                <article className="min-h-[330px] rounded-[26px] bg-white p-8 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <h2 className="mb-5 text-2xl font-bold text-slate-950">How clients will see you</h2>

                    <div className="rounded-[18px] bg-white p-8 text-center shadow-[inset_0_0_0_1px_rgba(226,232,240,0.85)]">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-[#F97415]/35 bg-orange-50/40 text-[#F97415]">
                            <FiCamera className="h-6 w-6" />
                        </div>

                        <div className="mx-auto mt-5 h-4 w-28 rounded-full bg-slate-100" />
                        <div className="mx-auto mt-3 h-3 w-20 rounded-full bg-slate-100" />

                        <div className="mt-5 flex justify-center gap-2">
                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-[#F97415]">Skill 1</span>
                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-[#F97415]">Skill 2</span>
                        </div>

                        <p className="mt-5 text-sm text-slate-600">Add details to see your preview...</p>
                    </div>

                    <Link
                        to="/professional/profile"
                        className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-[#F97415] transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                    >
                        Preview Profile
                    </Link>
                </article>
            </div>

            <article className="rounded-[24px] bg-white p-8 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                <div className="mb-6 flex items-center justify-between gap-5">
                    <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-950">
                        <FiImage className="h-5 w-5 text-[#F97415]" />
                        Tips to get more clients
                    </h2>
                    <Link
                        to="/professional/profile"
                        className="rounded-full bg-orange-50 px-6 py-3 text-sm font-bold text-[#F97415] transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                    >
                        Improve Profile
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#F97415]">
                            <FiCheck className="h-4 w-4" />
                        </span>
                        <div>
                            <h3 className="font-bold text-slate-950">Use a clear profile picture</h3>
                            <p className="mt-1 text-sm text-slate-600">Profiles with real photos get 3x more bookings.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#F97415]">
                            <FiCheck className="h-4 w-4" />
                        </span>
                        <div>
                            <h3 className="font-bold text-slate-950">Be specific in your descriptions</h3>
                            <p className="mt-1 text-sm text-slate-600">Detail exactly what is included in your service to avoid confusion.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
