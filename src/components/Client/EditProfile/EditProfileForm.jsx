import { useRef, useState } from "react";
import EditProfileHeader from "./components/EditProfileHeader";
import PersonalInfoSection from "./components/PersonalInfoSection";
import ProfilePictureSection from "./components/ProfilePictureSection";

const defaultImage = "https://i.pravatar.cc/200?img=68";

const inputBaseClass =
    "w-full rounded-xl border border-slate-200 bg-[#f8f9fb] px-4 py-3 pl-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white";

export default function EditProfileForm() {
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
            <EditProfileHeader />

            <div className="rounded-2xl bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                <ProfilePictureSection
                    fileInputRef={fileInputRef}
                    imagePreview={imagePreview}
                    uploadError={uploadError}
                    onOpenFilePicker={openFilePicker}
                    onImageChange={handleImageChange}
                    onRemoveImage={removeImage}
                />

                <PersonalInfoSection inputBaseClass={inputBaseClass} />
            </div>
        </section>
    );
}
