import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultProfile from "../../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../../shared/utils/getUserPhotoUrl";

export default function ProfessionalCard({ professional }) {
    const photoUrl = getUserPhotoUrl(professional.user?.photo);

    return (
        <div className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.1)] sm:p-8">
            <div className="flex justify-between items-start mb-6">
                <div className="relative">
                    <img
                        src={photoUrl || defaultProfile}
                        alt={professional.user.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-sm"
                    />

                    <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#22C55E] border-4 border-white rounded-full"></div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-amber-700 ring-1 ring-amber-100">
                    <FaRegStar color="#EAB308" />
                    <span className="text-sm font-bold">
                        {Number(professional.rating || 0).toFixed(1)}
                    </span>
                </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-1">
                {professional.user.name}
            </h3>

            <p className="text-[#FF7A1A] text-xs font-black uppercase tracking-wider mb-4">
                {professional.category?.name}
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {professional.description}
            </p>

            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <Link to={`/professional/${professional.id}`} className="font-bold text-[#FF7A1A] transition-colors hover:text-[#E66900] hover:underline">
                    Book Profile
                </Link>
            </div>
        </div>
    );
}

