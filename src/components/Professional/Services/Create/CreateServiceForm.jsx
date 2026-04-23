import { useState } from "react";
import StepSimpleInfo from "./Steps/StepSimpleInfo";
import useCreateServiceForm from "../../../../hooks/useCreateServiceForm";

export default function CreateServiceForm() {
    const { form, handleChange } = useCreateServiceForm();
    const [step, setStep] = useState(1);

    function renderStep() {
        switch (step) {
            case 1:
                return <StepSimpleInfo form={form} handleChange={handleChange} setStep={setStep} />;
            default:
                return null;
        }
    }

    return (
        <form>
            {renderStep()}
        </form>
    );
}
