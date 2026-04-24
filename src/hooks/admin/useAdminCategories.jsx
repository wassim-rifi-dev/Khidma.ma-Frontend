import { useEffect, useMemo, useState } from "react";
import {
    createCategorie,
    deleteCategorie,
    getAllCategories,
    updateCategorie,
} from "../../services/admin/categoriesServices";
import {
    buildCategoriesSummaryCards,
    formatAdminCategories,
} from "../../utils/Helpers/admin/Categories";

export default function useAdminCategories() {
    const [allCategories, setAllCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pendingCategoryId, setPendingCategoryId] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setLoading(true);
                setFeedback(null);

                const response = await getAllCategories();

                setAllCategories(response?.data?.categories ?? []);
            } catch (error) {
                setFeedback({
                    type: "error",
                    message: error?.message || "Unable to load categories right now.",
                });
            } finally {
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);

    const categories = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        return formatAdminCategories(allCategories).filter((category) => {
            if (!normalizedQuery) {
                return true;
            }

            return category.name.toLowerCase().includes(normalizedQuery);
        });
    }, [allCategories, searchQuery]);

    const summaryCards = useMemo(
        () => buildCategoriesSummaryCards(allCategories),
        [allCategories]
    );

    async function createCategory(name) {
        try {
            setIsSaving(true);
            setFeedback(null);

            const response = await createCategorie({ name });
            const category = response?.data?.category;

            setAllCategories((currentCategories) => [category, ...currentCategories]);
            setFeedback({
                type: "success",
                message: response?.message || "Category created successfully.",
            });

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error?.errors?.name?.[0] || error?.message || "Unable to create category.",
            };
        } finally {
            setIsSaving(false);
        }
    }

    async function renameCategory(categoryId, name) {
        try {
            setIsSaving(true);
            setFeedback(null);

            const response = await updateCategorie(categoryId, { name });
            const updatedCategory = response?.data?.category;

            setAllCategories((currentCategories) =>
                currentCategories.map((category) =>
                    category?.id === categoryId ? updatedCategory : category
                )
            );
            setFeedback({
                type: "success",
                message: response?.message || "Category updated successfully.",
            });

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error?.errors?.name?.[0] || error?.message || "Unable to update category.",
            };
        } finally {
            setIsSaving(false);
        }
    }

    async function removeCategory(categoryId) {
        try {
            setPendingCategoryId(categoryId);
            setFeedback(null);

            const response = await deleteCategorie(categoryId);

            setAllCategories((currentCategories) =>
                currentCategories.filter((category) => category?.id !== categoryId)
            );
            setFeedback({
                type: "success",
                message: response?.message || "Category deleted successfully.",
            });
        } catch (error) {
            setFeedback({
                type: "error",
                message: error?.message || "Unable to delete category.",
            });
        } finally {
            setPendingCategoryId(null);
        }
    }

    return {
        categories,
        createCategory,
        feedback,
        isSaving,
        loading,
        pendingCategoryId,
        removeCategory,
        renameCategory,
        searchQuery,
        setSearchQuery,
        summaryCards,
    };
}
