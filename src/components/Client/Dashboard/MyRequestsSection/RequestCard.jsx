import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../utils/getUserPhotoUrl";

function getStatusConfig(status) {
    if (status === "En_Cour") {
        return {
            label: "In Progress",
            badgeClassName: "bg-blue-50 text-blue-600",
            actionLabel: "Chat with Pro",
        };
    }

    if (status === "Terminer") {
        return {
            label: "Completed",
            badgeClassName: "bg-green-50 text-green-600",
            actionLabel: "Leave a Review",
        };
    }

    return {
        label: "New Request",
        badgeClassName: "bg-[#fff0ea] text-[#ff7e5f]",
        actionLabel: "Cancel Request",
    };
}

function formatRelativeDate(dateString) {
    if (!dateString) {
        return "Recently";
    }

    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) {
        return "Just now";
    }

    if (diffInHours < 24) {
        return `${diffInHours}h ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays === 1) {
        return "Yesterday";
    }

    return `${diffInDays} days ago`;
}

export default function RequestCard({ request }) {
    const statusConfig = getStatusConfig(request.status);
    const professionalUser = request.service?.professional?.user;
    const professionalName = professionalUser
        ? `${professionalUser.first_name} ${professionalUser.last_name}`
        : "Professional";
    const professionalPhoto = getUserPhotoUrl(professionalUser?.photo);

    return (
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-2">
                <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${statusConfig.badgeClassName}`}>
                    {statusConfig.label}
                </span>

                <span className="text-gray-400 text-[9px] sm:text-[10px] font-medium">
                    {formatRelativeDate(request.created_at)}
                </span>
            </div>

            {request.status !== "Nouveau" ? (
                <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                        <img
                            src={professionalPhoto || defaultProfile}
                            className="w-full h-full object-cover"
                            alt={professionalName}
                        />
                    </div>

                    <span className="text-[11px] text-gray-600 font-medium">
                        {professionalName}
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
