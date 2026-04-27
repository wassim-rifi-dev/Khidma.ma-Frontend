export function getAnalyticsBarHeight(value, maxValue) {
    if (maxValue <= 0) {
        return "8%";
    }

    const ratio = Math.max(value / maxValue, 0.08);

    return `${Math.round(ratio * 100)}%`;
}
