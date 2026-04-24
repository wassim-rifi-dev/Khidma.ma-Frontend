function formatUpdatedDate(dateString) {
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

export function buildCategoriesSummaryCards(categories) {
    const categoriesList = Array.isArray(categories) ? categories : [];
    const totalCategories = categoriesList.length;
    const mostUsedCategory = categoriesList.reduce((topCategory, category) => {
        if (!topCategory) {
            return category;
        }

        return (category?.services_count ?? 0) > (topCategory?.services_count ?? 0)
            ? category
            : topCategory;
    }, null);
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const newThisMonth = categoriesList.filter((category) => {
        const createdAt = new Date(category?.created_at);

        return !Number.isNaN(createdAt.getTime()) && createdAt >= startOfMonth;
    }).length;

    return [
        { label: "Total categories", value: totalCategories },
        { label: "Most used", value: mostUsedCategory?.name || "None yet" },
        { label: "New this month", value: newThisMonth },
    ];
}

export function formatAdminCategories(categories) {
    const categoriesList = Array.isArray(categories) ? categories : [];

    return categoriesList.map((category) => ({
        id: category?.id,
        name: category?.name || "Untitled category",
        servicesCount: Number(category?.services_count ?? 0),
        professionalsCount: Number(category?.professionals_count ?? 0),
        servicesLabel: `${Number(category?.services_count ?? 0)} services`,
        professionalsLabel: `${Number(category?.professionals_count ?? 0)} professionals`,
        updated: formatUpdatedDate(category?.updated_at || category?.created_at),
    }));
}
