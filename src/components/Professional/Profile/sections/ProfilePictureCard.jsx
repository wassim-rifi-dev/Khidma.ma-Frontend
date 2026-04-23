import { Link } from "react-router-dom";
import { FiEdit3, FiEye, FiMapPin, FiStar, FiTool } from "react-icons/fi";
import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../utils/getUserPhotoUrl";

export default function ProfilePictureCard({ user, professional }) {
    const categoryName = professional?.category?.name || professional?.categorie?.name || "Professional";
    const city = professional?.city || "Morocco";
    const rating = Number(professional?.rating || 0).toFixed(1);
    const reviewsCount = professional?.reviews_count || 0;
    const photoUrl = getUserPhotoUrl(user?.photo);

    return (
        <section className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-col items-center gap-7 text-center sm:flex-row sm:text-left">
                    <div className="relative h-36 w-36 shrink-0 sm:h-40 sm:w-40">
                        <img
                            src={photoUrl || defaultProfile}
                            alt={user?.name || "Professional"}
                            className="h-full w-full rounded-full object-cover ring-4 ring-orange-100"
                        />
                        <span className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-500 shadow-md ring-2 ring-slate-100">
                            <FiTool className="h-5 w-5" />
                        </span>
                    </div>

                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                            {user?.name || "Professional"}
                        </h2>

                        <div className="mt-4 flex flex-wrap justify-center gap-3 text-base text-slate-500 sm:justify-start">
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-600">
                                <FiTool className="h-5 w-5 text-orange-500" />
                                {categoryName}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 font-medium">
                                <FiMapPin className="h-5 w-5 text-slate-400" />
                                {city}
                            </span>
                        </div>

                        <div className="mt-4 inline-flex items-center gap-2 text-base">
                            <FiStar className="h-5 w-5 fill-orange-400 text-orange-400" />
                            <span className="font-semibold text-slate-900">{rating}</span>
                            <span className="text-slate-400">({reviewsCount} reviews)</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row xl:justify-end">
                    <Link
                        to="/professional/profile/edit"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                    >
                        <FiEdit3 className="h-5 w-5" />
                        Edit Profile
                    </Link>

                    <Link
                        to={professional?.id ? `/professional/${professional.id}` : "#"}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition ${
                            professional?.id
                                ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                : "pointer-events-none bg-slate-100 text-slate-300"
                        }`}
                    >
                        <FiEye className="h-5 w-5" />
                        Preview Public Profile
                    </Link>
                </div>
            </div>
        </section>
    );
}
