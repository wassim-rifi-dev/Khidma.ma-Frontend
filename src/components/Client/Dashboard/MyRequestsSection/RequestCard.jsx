import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../utils/getUserPhotoUrl";
import * as requestHelpers from "../../../../utils/Helpers/Request";

export default function RequestCard({ request }) {
    const statusConfig = requestHelpers.getStatusConfig(request.status);
    const professionalUser = request.service?.professional?.user;
    const professionalPhoto = getUserPhotoUrl(professionalUser?.photo);

    return (
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-2">
                <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${statusConfig.badgeClassName}`}>
                    {statusConfig.label}
                </span>

                <span className="text-gray-400 text-[9px] sm:text-[10px] font-medium">
                    {requestHelpers.formatRelativeDate(request.created_at)}
                </span>
            </div>

            {request.status !== "Nouveau" ? (
                <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                        <img
                            src={professionalPhoto || defaultProfile}
                            className="w-full h-full object-cover"
                            alt={professionalUser.name}
                        />
                    </div>

                    <span className="text-[11px] text-gray-600 font-medium">
                        {professionalUser.name}
                    </span>
                </div>
            ) : (
                <p className="text-gray-400 text-[10px] sm:text-xs mb-3">
                    Waiting for pro acceptance...
                </p>
            )}

            <button className="w-full bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                {statusConfig.actionLabel}
            </button>
        </div>
    );
}
