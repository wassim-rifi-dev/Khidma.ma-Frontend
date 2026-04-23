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

export function getProfessionalRequestStatusConfig(status) {
    if (status === "Terminer") {
        return {
            label: "Completed",
            className: "bg-emerald-50 text-emerald-600",
        };
    }

    if (status === "En_Cour") {
        return {
            label: "In Progress",
            className: "bg-sky-50 text-sky-600",
        };
    }

    return {
        label: "New",
        className: "bg-orange-50 text-[#ff781f]",
    };
}

export function getProfessionalRequestFilterValue(status) {
    if (status === "Terminer") {
        return "completed";
    }

    if (status === "En_Cour") {
        return "in-progress";
    }

    return "new";
}

export function formatRequestDate(dateString) {
    if (!dateString) {
        return "Recently";
    }

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "Recently";
    }

    return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
}

export function formatRequestPrice(price) {
    if (price === null || price === undefined || price === "") {
        return "Price not set";
    }

    return `${price} MAD`;
}
