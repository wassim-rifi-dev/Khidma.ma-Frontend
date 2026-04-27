export function formatReviewTime(date) {
    if (!date) {
        return "Recently";
    }

    const diffMs = new Date(date).getTime() - Date.now();
    const diffDays = Math.round(diffMs / 86400000);
    const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (Math.abs(diffDays) < 1) {
        return "today";
    }

    return formatter.format(diffDays, "day");
}
