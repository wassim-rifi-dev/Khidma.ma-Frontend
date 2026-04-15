import { useState } from "react";
import { useRegisterForm } from "../../../hooks/useRegisterForm";
import StepRole from "./Steps/StepRole";
import StepSimpleInfo from "./Steps/StepSimpleInfo";
import StepProInfo from "./Steps/StepProInfo";

export default function RegisterForm() {
    const { form , handleChange , handleSubmit } = useRegisterForm();
    const [step , setStep] = useState(1);

    function renderStep() {
        switch (step) {
            case 1:
                return <StepRole form={form} handleChange={handleChange} setStep={setStep}  />
            case 2:
                return <StepSimpleInfo form={form} handleChange={handleChange} setStep={setStep} />
            case 3:
                if (form.role === 'professional') {
                    return <StepProInfo form={form} handleChange={handleChange} setStep={setStep} />
                } 
                break;
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