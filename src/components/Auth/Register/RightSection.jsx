import { useRegisterForm } from "../../../hooks/useRegisterForm";
import IHaveAccount from "./IHaveAccount";
import SocialSection from "./SocialSection";
import Step_1 from "./Steps/Step_1";
import Step_2 from "./Steps/Step_2";
import Step_3 from "./Steps/Step_3";

export default function RegisterForm() {
    const {form , handleChange , handleSubmit} = useRegisterForm();

    return (
        <div className="w-full max-w-xl mx-auto p-5 sm:p-6 md:p-8 bg-white font-sans text-slate-800">
            <div className="text-center mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">
                    Create your account
                </h2>

                <p className="text-slate-500 text-sm md:text-base">
                    Get started by choosing your account type below.
                </p>
            </div>

            <form className="space-y-7 md:space-y-8" onSubmit={handleSubmit}>

                {/* Step 1 */}
                <Step_1 handleChange={handleChange} form={form} />

                {/* Step 2 */}
                <Step_2 handleChange={handleChange} />

                {/* Step 3 */}
                <Step_3 handleChange={handleChange} />

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#FF781F] text-white py-4 md:py-5 rounded-full text-base md:text-lg font-bold shadow-lg hover:bg-[#e86d1c] transition"
                >
                    Create My Account
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                    <div className="flex-1 border-t border-slate-300"></div>

                    <span className="text-slate-400 text-sm font-medium">
                        Or sign up with
                    </span>

                    <div className="flex-1 border-t border-slate-300"></div>
                </div>

                {/* Social */}
                <SocialSection />

                <IHaveAccount />

            </form>
        </div>
    )
}