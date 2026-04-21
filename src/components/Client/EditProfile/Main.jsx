import { useRef, useState } from "react";
import { FiAlertCircle, FiCamera, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const nameFields = [
    { label: "First Name", value: "John" },
    { label: "Last Name", value: "Doe" },
];

const defaultImage = "https://i.pravatar.cc/200?img=68";

const inputBaseClass =
    "w-full rounded-xl border border-slate-200 bg-[#f8f9fb] px-4 py-3 pl-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white";

export default function Main() {
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(defaultImage);
    const [uploadError, setUploadError] = useState("");

    function openFilePicker() {
        fileInputRef.current?.click();
    }

    function handleImageChange(event) {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            setUploadError("Please choose a valid image file.");
            event.target.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setUploadError("Image size must be 2MB or less.");
            event.target.value = "";
            return;
        }

        setUploadError("");
        setImagePreview(URL.createObjectURL(file));
    }

    function removeImage() {
        setImagePreview(defaultImage);
        setUploadError("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    return (
        <section className="w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
                    Edit Profile
                </h1>
                <p className="mt-3 text-lg text-slate-500">
                    Update your personal details and account settings.
                </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />

                    <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                        <img
                            src={imagePreview}
                            alt="Profile"
                            className="h-full w-full rounded-full object-cover shadow-md"
                        />
                        <button
                            type="button"
                            onClick={openFilePicker}
                            className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-500 shadow-md ring-2 ring-slate-100"
                        >
                            <FiCamera className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-2xl font-semibold text-slate-800">Profile Picture</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Upload a new avatar. Larger image will be resized automatically.
                            Max size 2MB.
                        </p>

                        <div className="mt-5 flex items-center gap-5">
                            <button
                                type="button"
                                onClick={openFilePicker}
                                className="rounded-full bg-orange-50 px-5 py-2.5 text-sm font-medium text-orange-500 transition hover:bg-orange-100"
                            >
                                Upload New
                            </button>
                            <button
                                type="button"
                                onClick={removeImage}
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

                <div className="pt-8">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
                        Personal Information
                    </h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {nameFields.map((field) => (
                            <label key={field.label} className="block">
                                <span className="mb-2 block text-sm font-semibold text-slate-700">
                                    {field.label}
                                </span>
                                <div className="relative">
                                    <FiUser className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <input
                                        defaultValue={field.value}
                                        className={inputBaseClass}
                                    />
                                </div>
                            </label>
                        ))}
                    </div>

                    <div className="mt-5">
                        <label className="block">
                            <span className="mb-2 block text-sm font-semibold text-slate-700">
                                Username
                            </span>
                            <div className="relative">
                                <FiUser className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    defaultValue="johnwaterson"
                                    className={inputBaseClass}
                                />
                            </div>
                        </label>
                    </div>

                    <div className="mt-5">
                        <label className="block">
                            <span className="mb-2 block text-sm font-semibold text-slate-700">
                                Email Address
                            </span>
                            <div className="relative">
                                <FiMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    defaultValue="john@example.com"
                                    className={inputBaseClass}
                                />
                            </div>
                        </label>
                    </div>

                    <div className="mt-5 border-b border-slate-200 pb-7">
                        <label className="block">
                            <span className="mb-2 block text-sm font-semibold text-slate-700">
                                Phone Number
                            </span>
                            <div className="relative">
                                <FiPhone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    defaultValue="+212 600 000000"
                                    className={inputBaseClass}
                                />
                            </div>
                        </label>
                    </div>

                    <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-end">
                        <Link
                            to={'/profile'}
                            className="px-3 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
                        >
                            Cancel
                        </Link>
                        <button
                            type="button"
                            className="rounded-2xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
