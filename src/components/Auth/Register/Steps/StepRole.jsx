import { FiTool, FiCheck } from "react-icons/fi";
import { FaArrowRight, FaRegUser } from "react-icons/fa";

export default function StepRole({ form, handleChange, setStep }) {
    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">

            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    Choose your role
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                    Choose how you want to use Khidma.ma
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">

                <label className="relative cursor-pointer group">
                    <input
                        type="radio"
                        name="role"
                        value="client"
                        className="peer sr-only"
                        checked={form.role === 'client'}
                        onChange={handleChange}
                    />

                    <div className="relative p-6 rounded-2xl border-2 border-[#F3F4F6] bg-white transition-all peer-checked:border-[#FF781F] peer-checked:bg-[#FFF7ED]">

                        <div className="w-14 h-14 rounded-xl bg-[#F9FAFB] flex items-center justify-center text-slate-500 group-has-[input:checked]:bg-[#FFEDD5] group-has-[input:checked]:text-[#EA580C] mb-4">
                            <FaRegUser size={26} />
                        </div>

                        <h3 className="text-lg font-semibold text-[#111827] mb-2">
                            Client
                        </h3>

                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            Find and book trusted professionals for your home or business projects.
                        </p>

                    </div>
                </label>

                <label className="relative cursor-pointer group">
                    <input
                        type="radio"
                        name="role"
                        value="professional"
                        className="peer sr-only"
                        checked={form.role === 'professional'}
                        onChange={handleChange}
                    />

                    <div className="relative p-6 rounded-2xl border-2 border-[#F3F4F6] bg-white transition-all peer-checked:border-[#FF781F] peer-checked:bg-[#FFF7ED]">


                        <div className="w-14 h-14 rounded-xl bg-[#F9FAFB] flex items-center justify-center text-slate-500 group-has-[input:checked]:bg-[#FFEDD5] group-has-[input:checked]:text-[#EA580C] mb-4">
                            <FiTool size={26} />
                        </div>

                        <h3 className="text-lg font-semibold text-[#111827] mb-2">
                            Professional
                        </h3>

                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            Offer your services and get new clients to grow your business today.
                        </p>

                    </div>
                </label>

            </div>

            <button
                className="mt-8 w-full flex items-center justify-center gap-2  bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                onClick={() => setStep(2)}
                disabled={!form.role.trim()}
            >
                Continue
                <FaArrowRight size={14} />
            </button>

        </div>
    )
}