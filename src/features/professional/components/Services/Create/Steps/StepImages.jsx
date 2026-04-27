import { useEffect, useMemo } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa";
import { FiImage } from "react-icons/fi";

function useObjectUrl(file) {
    const preview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return preview;
}

function UploadCard({
    id,
    label,
    helper,
    onChange,
    preview,
    multiple = false,
    children,
}) {
    return (
        <div>
            {children}

            <label
                htmlFor={id}
                className="mt-2 flex min-h-30 cursor-pointer items-center justify-center rounded-xl border border-dashed border-[rgb(255,120,31)]/40 bg-slate-50 px-4 py-6 transition hover:bg-orange-50/40"
            >
                <input
                    id={id}
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    multiple={multiple}
                    onChange={onChange}
                    className="hidden"
                />

                {preview ? (
                    <img
                        src={preview}
                        alt={label}
                        className="max-h-52 w-full rounded-lg object-cover"
                    />
                ) : (
                    <div className="text-center">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[rgb(255,120,31)]">
                            <FiImage size={22} />
                        </div>

                        <p className="text-sm font-semibold text-[rgb(255,120,31)]">
                            {label}
                        </p>

                        <p className="mt-1 text-xs sm:text-sm text-slate-500">
                            {helper}
                        </p>
                    </div>
                )}
            </label>
        </div>
    );
}

function GallerySlot({ file, index, onChange, onRemove }) {
    const preview = useObjectUrl(file);

    return (
        <div className="relative">
            <label
                htmlFor={`gallery-image-${index}`}
                className="flex min-h-30 cursor-pointer items-center justify-center rounded-xl border border-dashed border-[rgb(255,120,31)]/40 bg-slate-50 p-3 transition hover:bg-orange-50/40"
            >
                <input
                    id={`gallery-image-${index}`}
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={onChange}
                    className="hidden"
                />

                {preview ? (
                    <img
                        src={preview}
                        alt={`Gallery ${index + 1}`}
                        className="h-28 w-full rounded-lg object-cover"
                    />
                ) : (
                    <div className="text-center text-slate-500">
                        <FaPlus className="mx-auto mb-2 text-sm" />
                        <p className="text-xs sm:text-sm">Add Image</p>
                    </div>
                )}
            </label>

            {file ? (
                <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-red-500"
                    aria-label={`Remove gallery image ${index + 1}`}
                >
                    <FaTrash size={11} />
                </button>
            ) : null}
        </div>
    );
}

export default function StepImages({
    form,
    isSubmitting,
    submitError,
    setStep,
    handleCoverImageChange,
    handleGalleryImagesChange,
    removeCoverImage,
    removeGalleryImage,
}) {
    const coverPreview = useObjectUrl(form.coverImage);

    function handleGallerySlotChange(index, event) {
        const nextFile = event.target.files?.[0] || null;

        if (!nextFile) {
            return;
        }

        const nextImages = [...form.galleryImages];
        nextImages[index] = nextFile;

        handleGalleryImagesChange({
            target: {
                files: nextImages.filter(Boolean),
            },
        });
    }

    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8">
            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                    Upload Service Images
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Showcase your work with a strong cover image and extra gallery photos.
                </p>
            </div>

            <div className="space-y-5">
                <div>
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700">Cover Image</h3>
                            <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                This is the first image clients will see.
                            </p>
                        </div>

                        {form.coverImage ? (
                            <button
                                type="button"
                                onClick={removeCoverImage}
                                className="text-xs sm:text-sm font-medium text-red-500 transition hover:text-red-600"
                            >
                                Remove
                            </button>
                        ) : null}
                    </div>

                    <UploadCard
                        id="cover-image"
                        label="Click to upload cover image"
                        helper="PNG, JPG up to 10MB"
                        onChange={handleCoverImageChange}
                        preview={coverPreview}
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700">Gallery (Optional)</h3>
                            <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                Add up to 4 more images to show past work or different angles.
                            </p>
                        </div>

                        <label
                            htmlFor="gallery-images-bulk"
                            className="cursor-pointer text-xs sm:text-sm font-medium text-[rgb(255,120,31)] transition hover:text-[#e96d17]"
                        >
                            Add multiple
                            <input
                                id="gallery-images-bulk"
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                multiple
                                onChange={handleGalleryImagesChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {Array.from({ length: 4 }, (_, index) => (
                            <GallerySlot
                                key={index}
                                index={index}
                                file={form.galleryImages[index] || null}
                                onChange={(event) => handleGallerySlotChange(index, event)}
                                onRemove={removeGalleryImage}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {submitError ? (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {submitError}
                </div>
            ) : null}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">
                <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={isSubmitting}
                    className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                    <span className="inline-flex items-center gap-2">
                        <FaArrowLeft size={14} />
                        Back
                    </span>
                </button>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 sm:col-span-2"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Publishing..." : "Publish Service"}
                    <FaArrowRight size={14} />
                </button>
            </div>
        </div>
    );
}
