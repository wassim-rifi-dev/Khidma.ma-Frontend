import { useState } from "react";
import StepSimpleInfo from "./Steps/StepSimpleInfo";
import StepPricing from "./Steps/StepPricing";
import StepImages from "./Steps/StepImages";
import useCreateServiceForm from "../../../hooks/useCreateServiceForm";

export default function CreateServiceForm() {
    const {
        form,
        isSubmitting,
        submitError,
        handleChange,
        handleCoverImageChange,
        handleGalleryImagesChange,
        removeCoverImage,
        removeGalleryImage,
        handleSubmit,
    } = useCreateServiceForm();
    const [step, setStep] = useState(1);

    function renderStep() {
        switch (step) {
            case 1:
                return <StepSimpleInfo form={form} handleChange={handleChange} setStep={setStep} />;
            case 2:
                return (
                    <StepPricing
                        form={form}
                        handleChange={handleChange}
                        setStep={setStep}
                    />
                );
            case 3:
                return (
                    <StepImages
                        form={form}
                        isSubmitting={isSubmitting}
                        submitError={submitError}
                        setStep={setStep}
                        handleCoverImageChange={handleCoverImageChange}
                        handleGalleryImagesChange={handleGalleryImagesChange}
                        removeCoverImage={removeCoverImage}
                        removeGalleryImage={removeGalleryImage}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderStep()}
        </form>
    );
}
