import { FiAlertCircle, FiCamera } from "react-icons/fi";

const fileInputId = "edit-professional-profile-image";

export default function ProfessionalProfilePictureSection({
    fileInputKey,
    imagePreview,
    uploadError,
    onImageChange,
    onRemoveImage,
}) {
    return (
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
            <input
                key={fileInputKey}
                id={fileInputId}
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="hidden"
            />

            <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                <img
                    src={imagePreview}
                    alt="Professional profile"
                    className="h-full w-full rounded-full object-cover shadow-md ring-4 ring-orange-100"
                />
                <label
                    htmlFor={fileInputId}
                    className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-500 shadow-md ring-2 ring-slate-100"
                >
                    <FiCamera className="h-4 w-4" />
                </label>
            </div>

            <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-slate-800">Profile Picture</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Add a clear photo so clients can recognize you and trust your profile.
                    Max size 2MB.
                </p>

                <div className="mt-5 flex items-center gap-5">
                    <label
                        htmlFor={fileInputId}
                        className="rounded-full bg-orange-50 px-5 py-2.5 text-sm font-medium text-orange-500 transition hover:bg-orange-100"
                    >
                        Upload New
                    </label>
                    <button
                        type="button"
                        onClick={onRemoveImage}
                        className="text-sm font-medium text-slate-500 transition hover:text-slate-700"
                    >
                        Remove
                    </button>
                </div>

                {uploadError ? (
                    <p className="mt-4 flex items-center gap-2 text-sm text-red-500">
                        <FiAlertCircle className="h-4 w-4" />
                        {uploadError}
                    </p>
                ) : null}
            </div>
        </div>
    );
}
