import { useEffect, useState } from "react";
import {
    FiBookmark,
    FiEdit2,
    FiFolderPlus,
    FiLayers,
    FiLoader,
    FiSearch,
    FiShield,
    FiTrash2,
    FiX,
} from "react-icons/fi";
import useAdminCategories from "../../hooks/useAdminCategories";
import AdminActionConfirmModal from "../Shared/AdminActionConfirmModal";

function CategoryFormModal({
    isOpen,
    title,
    description,
    initialValue = "",
    confirmLabel,
    isSaving,
    onClose,
    onSubmit,
}) {
    const [name, setName] = useState(initialValue);
    const [error, setError] = useState("");

    useEffect(() => {
        if (isOpen) {
            setName(initialValue);
            setError("");
        }
    }, [initialValue, isOpen]);

    if (!isOpen) {
        return null;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const trimmedName = name.trim();

        if (!trimmedName) {
            setError("Category name is required.");
            return;
        }

        const result = await onSubmit(trimmedName);

        if (!result?.success) {
            setError(result?.message || "Unable to save category.");
            return;
        }

        setError("");
        onClose();
    }

    return (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Category editor</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-950">{title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isSaving}
                        className="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <FiX className="h-4 w-4" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Category name</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                                if (error) {
                                    setError("");
                                }
                            }}
                            placeholder="e.g. Cleaning"
                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-orange-300 focus:bg-white"
                        />
                    </label>

                    {error ? (
                        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                            {error}
                        </div>
                    ) : null}

                    <div className="flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="rounded-full bg-[#F97415] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSaving ? "Saving..." : confirmLabel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function AdminCategoriesManagement() {
    const {
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
    } = useAdminCategories();
    const [confirmState, setConfirmState] = useState(null);
    const [createOpen, setCreateOpen] = useState(false);
    const [editState, setEditState] = useState(null);

    return (
        <>
            <div className="space-y-6">
                <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Categories management</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Manage service categories</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                                Live admin workspace for organizing service categories and tracking how much each one is used across the platform.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setCreateOpen(true)}
                            className="flex items-center gap-2 rounded-full bg-[#F97415] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,116,21,0.2)] transition hover:bg-orange-600"
                        >
                            <FiFolderPlus className="h-4 w-4" />
                            Add category
                        </button>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {summaryCards.map((card) => (
                        <article key={card.label} className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">{card.label}</p>
                                    <p className="mt-3 text-3xl font-bold text-slate-950">{card.value}</p>
                                </div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                                    <FiLayers className="h-5 w-5" />
                                </span>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="rounded-[22px] bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                            <FiSearch className="h-4 w-4 shrink-0" />
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder="Search categories..."
                                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </label>

                        <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                            <FiShield className="h-5 w-5 text-[#F97415]" />
                            <span>Admin-only workspace</span>
                        </div>
                    </div>

                    {feedback ? (
                        <div
                            className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                                feedback.type === "success"
                                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                    : "border-rose-200 bg-rose-50 text-rose-700"
                            }`}
                        >
                            {feedback.message}
                        </div>
                    ) : null}

                    <div className="mt-6 overflow-x-auto rounded-[20px] border border-slate-200">
                        <div className="grid min-w-[680px] grid-cols-[1.2fr_1fr_1fr_0.9fr_auto] gap-3 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            <span>Category</span>
                            <span>Services</span>
                            <span>Professionals</span>
                            <span>Updated</span>
                            <span>Actions</span>
                        </div>

                        <div className="divide-y divide-slate-200">
                            {loading ? (
                                <div className="px-5 py-10 text-center text-sm text-slate-500">
                                    Loading categories...
                                </div>
                            ) : categories.length > 0 ? (
                                categories.map((category) => (
                                    <div key={category.id} className="grid min-w-[680px] grid-cols-[1.2fr_1fr_1fr_0.9fr_auto] gap-3 px-5 py-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 text-[#F97415]">
                                                <FiBookmark className="h-4 w-4" />
                                            </span>
                                            <span className="font-semibold text-slate-900">{category.name}</span>
                                        </div>
                                        <span>{category.servicesLabel}</span>
                                        <span>{category.professionalsLabel}</span>
                                        <span>{category.updated}</span>
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <button
                                                type="button"
                                                onClick={() => setEditState({ id: category.id, name: category.name })}
                                                title="Edit category"
                                                aria-label="Edit category"
                                                className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2.5 transition hover:text-[#F97415]"
                                            >
                                                <FiEdit2 className="h-4 w-4" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setConfirmState({
                                                        title: "Delete category",
                                                        message: `Are you sure you want to delete ${category.name}? This action cannot be undone.`,
                                                        confirmLabel: "Delete",
                                                        confirmTone: "danger",
                                                        onConfirm: () => removeCategory(category.id),
                                                        categoryId: category.id,
                                                    })
                                                }
                                                disabled={pendingCategoryId === category.id}
                                                title="Delete category"
                                                aria-label="Delete category"
                                                className="inline-flex items-center justify-center rounded-full bg-rose-50 p-2.5 text-rose-600 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-70"
                                            >
                                                {pendingCategoryId === category.id ? (
                                                    <FiLoader className="h-4 w-4 animate-spin" />
                                                ) : (
                                                    <FiTrash2 className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="px-5 py-10 text-center text-sm text-slate-500">
                                    No categories found.
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            <CategoryFormModal
                isOpen={createOpen}
                title="Create category"
                description="Add a new service category that professionals can use on the platform."
                initialValue=""
                confirmLabel="Create category"
                isSaving={isSaving}
                onClose={() => {
                    if (!isSaving) {
                        setCreateOpen(false);
                    }
                }}
                onSubmit={createCategory}
            />

            <CategoryFormModal
                isOpen={Boolean(editState)}
                title="Rename category"
                description="Update the category label and keep the linked services and professionals attached to it."
                initialValue={editState?.name || ""}
                confirmLabel="Save changes"
                isSaving={isSaving}
                onClose={() => {
                    if (!isSaving) {
                        setEditState(null);
                    }
                }}
                onSubmit={(name) => renameCategory(editState?.id, name)}
            />

            <AdminActionConfirmModal
                isOpen={Boolean(confirmState)}
                title={confirmState?.title}
                message={confirmState?.message}
                confirmLabel={confirmState?.confirmLabel}
                confirmTone={confirmState?.confirmTone}
                isLoading={pendingCategoryId === confirmState?.categoryId}
                onClose={() => {
                    if (!pendingCategoryId) {
                        setConfirmState(null);
                    }
                }}
                onConfirm={async () => {
                    await confirmState?.onConfirm?.();
                    setConfirmState(null);
                }}
            />
        </>
    );
}

