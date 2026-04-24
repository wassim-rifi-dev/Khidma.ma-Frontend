function formatJoinedDate(dateString) {
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

function getRoleTone(role) {
    switch (role) {
        case "client":
            return "bg-sky-50 text-sky-600";
        case "professional":
            return "bg-orange-50 text-[#F97415]";
        case "admin":
            return "bg-violet-50 text-violet-600";
        default:
            return "bg-slate-100 text-slate-600";
    }
}

function getStatusTone(isActive) {
    return isActive
        ? "bg-emerald-50 text-emerald-600"
        : "bg-rose-50 text-rose-600";
}

function formatRoleLabel(role) {
    if (!role) {
        return "User";
    }

    return role.charAt(0).toUpperCase() + role.slice(1);
}

export function buildAdminUsersSummaryCards(users) {
    if (!Array.isArray(users)) {
        return [
            { label: "Total users", value: 0 },
            { label: "Active accounts", value: 0 },
            { label: "Admins", value: 0 },
        ];
    }

    return [
        { label: "Total users", value: users.length },
        { label: "Active accounts", value: users.filter((user) => user?.is_active).length },
        { label: "Admins", value: users.filter((user) => user?.role === "admin").length },
    ];
}

export function formatAdminUsers(users) {
    if (!Array.isArray(users)) {
        return [];
    }

    return users.map((user) => ({
        id: user?.id,
        name: user?.name || user?.username || "Unknown user",
        username: user?.username || "",
        email: user?.email || "No email",
        rawRole: user?.role || "",
        role: formatRoleLabel(user?.role || ""),
        isActive: Boolean(user?.is_active),
        status: user?.is_active ? "Active" : "Suspended",
        joined: formatJoinedDate(user?.created_at),
        roleTone: getRoleTone(user?.role || ""),
        statusTone: getStatusTone(user?.is_active),
    }));
}
