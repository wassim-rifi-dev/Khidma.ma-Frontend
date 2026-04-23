// import { useState } from "react";
import StepSimpleInfo from "./Steps/StepSimpleInfo";

export default function RegisterForm() {
    // const [step , setStep] = useState(1);

    // function renderStep() {
    //     switch (step) {
    //         case 1:
    //             return <StepSimpleInfo />
    //         default:
    //             return null;
    //     }
    // }

    return (
        <form>
            <StepSimpleInfo />
        </form>
    )
}
