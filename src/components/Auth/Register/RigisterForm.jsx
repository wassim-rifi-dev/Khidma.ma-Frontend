import { useRegisterForm } from "../../../hooks/useRegisterForm";
import StepRole from "./Steps/StepRole";

export default function RegisterForm() {
    const {form , handleChange , handleSubmit} = useRegisterForm();
    return (
        <form onSubmit={handleSubmit}>
            <StepRole form={form} handleChange={handleChange} />
        </form>
    )
}