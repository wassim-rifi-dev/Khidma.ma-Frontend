import getUserPhotoUrl from "../../../shared/utils/getUserPhotoUrl";

export default function ChatAvatar({ conversation, className = "h-10 w-10", textClassName = "text-sm" }) {
    const photoUrl = getUserPhotoUrl(conversation?.participant?.photo);
    const name = conversation?.participant?.name || "Unknown";
    const initial = name.charAt(0).toUpperCase();

    if (photoUrl) {
        return (
            <img
                src={photoUrl}
                alt={name}
                className={`${className} rounded-full object-cover`}
            />
        );
    }

    return (
        <div className={`${className} flex items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600 ${textClassName}`}>
            {initial}
        </div>
    );
}
