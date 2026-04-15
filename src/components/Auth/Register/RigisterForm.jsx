import { useState } from "react";
import { useRegisterForm } from "../../../hooks/useRegisterForm";
import StepRole from "./Steps/StepRole";

export default function RegisterForm() {
    const { form , handleChange , handleSubmit } = useRegisterForm();
    const [step , setStep] = useState(1);

    function renderStep() {
        switch (step) {
            case 1:
                return <StepRole form={form} handleChange={handleChange} setStep={setStep}  />
            default:
                return null;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                renderStep()
            }
        </form>
    )
}