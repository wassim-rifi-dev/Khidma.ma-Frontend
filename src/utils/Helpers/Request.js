export function getStatusConfig(status) {
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

export function formatRelativeDate(dateString) {
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