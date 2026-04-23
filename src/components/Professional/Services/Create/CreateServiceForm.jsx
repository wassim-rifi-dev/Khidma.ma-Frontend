import { useState } from "react";
import StepSimpleInfo from "./Steps/StepSimpleInfo";
import StepPricing from "./Steps/StepPricing";
import StepReview from "./Steps/StepReview";
import useCreateServiceForm from "../../../../hooks/useCreateServiceForm";

export default function CreateServiceForm() {
    const { form, handleChange, handleSubmit } = useCreateServiceForm();
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
