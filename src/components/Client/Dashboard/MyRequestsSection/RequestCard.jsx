import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../utils/getUserPhotoUrl";
import * as requestHelpers from "../../../../utils/Helpers/Request";

export default function RequestCard({ request, onReview }) {
    const statusConfig = requestHelpers.getStatusConfig(request.status);
    const professionalUser = request.service?.professional?.user;
    const professionalPhoto = getUserPhotoUrl(professionalUser?.photo);
    const canReview = request.status === "Terminer" && !request.review;
    const hasReview = Boolean(request.review);

    function handleAction() {
        if (canReview) {
            onReview?.(request);
        }
    }

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

            <button
                type="button"
                onClick={handleAction}
                disabled={!canReview}
                className={`w-full text-xs sm:text-sm font-semibold py-2 rounded-xl transition ${
                    canReview
                        ? "bg-orange-50 text-orange-600 hover:bg-orange-100"
                        : hasReview
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-gray-50 text-gray-700"
                } ${!canReview ? "cursor-not-allowed" : ""}`}
            >
                {hasReview ? "Review Sent" : statusConfig.actionLabel}
            </button>
        </div>
    );
}
