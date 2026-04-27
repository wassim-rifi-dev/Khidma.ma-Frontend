import useEditClientProfileForm from "../../hooks/useEditClientProfileForm";
import EditProfileHeader from "./components/EditProfileHeader";
import PersonalInfoSection from "./components/PersonalInfoSection";
import ProfilePictureSection from "./components/ProfilePictureSection";

export default function EditProfileForm() {
    const {
        form,
        fileInputKey,
        imagePreview,
        uploadError,
        submitError,
        isSubmitting,
        handleChange,
        handleImageChange,
        removeImage,
        handleSubmit,
    } = useEditClientProfileForm();

    return (
        <section className="w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <EditProfileHeader />

            <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
            >
                <ProfilePictureSection
                    fileInputKey={fileInputKey}
                    imagePreview={imagePreview}
                    uploadError={uploadError}
                    onImageChange={handleImageChange}
                    onRemoveImage={removeImage}
                />

                <PersonalInfoSection
                    form={form}
                    onChange={handleChange}
                    submitError={submitError}
                    isSubmitting={isSubmitting}
                />
            </form>
        </section>
    );
}
