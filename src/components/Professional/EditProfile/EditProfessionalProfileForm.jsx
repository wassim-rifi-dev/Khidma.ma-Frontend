import ProfessionalEditProfileHeader from "./components/ProfessionalEditProfileHeader";
import ProfessionalPersonalInfoSection from "./components/ProfessionalPersonalInfoSection";
import ProfessionalProfilePictureSection from "./components/ProfessionalProfilePictureSection";
import ProfessionalWorkDetailsSection from "./components/ProfessionalWorkDetailsSection";
import useEditProfessionalProfileForm from "../../../hooks/useEditProfessionalProfileForm";

export default function EditProfessionalProfileForm() {
    const {
        form,
        categories,
        categoryName,
        imagePreview,
        fileInputKey,
        uploadError,
        submitError,
        isLoading,
        isSubmitting,
        handleChange,
        handleImageChange,
        removeImage,
        handleSubmit,
    } = useEditProfessionalProfileForm();

    return (
        <section className="w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <ProfessionalEditProfileHeader />

            <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
            >
                <ProfessionalProfilePictureSection
                    fileInputKey={fileInputKey}
                    imagePreview={imagePreview}
                    uploadError={uploadError}
                    onImageChange={handleImageChange}
                    onRemoveImage={removeImage}
                />

                <ProfessionalPersonalInfoSection
                    form={form}
                    onChange={handleChange}
                    isLoading={isLoading}
                />

                <ProfessionalWorkDetailsSection
                    form={form}
                    onChange={handleChange}
                    categories={categories}
                    categoryName={categoryName}
                    submitError={submitError}
                    isLoading={isLoading}
                    isSubmitting={isSubmitting}
                />
            </form>
        </section>
    );
}
