import ProfessionalEditProfileHeader from "./components/ProfessionalEditProfileHeader";
import ProfessionalPersonalInfoSection from "./components/ProfessionalPersonalInfoSection";
import ProfessionalProfilePictureSection from "./components/ProfessionalProfilePictureSection";
import ProfessionalWorkDetailsSection from "./components/ProfessionalWorkDetailsSection";
import useEditProfessionalProfileForm from "../../hooks/useEditProfessionalProfileForm";

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

    if (isLoading) {
        return (
            <section className="w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <ProfessionalEditProfileHeader />

                <div className="rounded-2xl bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500" />
                        <h2 className="mt-5 text-2xl font-semibold text-slate-800">
                            Loading your profile
                        </h2>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                            We are preparing your personal details, work information, and profile picture settings.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

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
                    isBusy={isSubmitting}
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
