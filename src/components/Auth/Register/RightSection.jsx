export default function RegisterForm() {
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

            <form className="space-y-7 md:space-y-8">

                {/* Step 1 */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        Step 1: Account Type
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Client */}
                        <label className="relative cursor-pointer">
                            <input
                                type="radio"
                                name="account_type"
                                value="client"
                                className="peer sr-only"
                                defaultChecked
                            />

                            <div className="rounded-2xl border-2 border-slate-100 bg-white p-5 text-center transition-all hover:bg-slate-50 peer-checked:border-[#FF781F] peer-checked:bg-orange-50/30">

                                <div className="mx-auto flex h-12 w-12 items-center justify-center text-[#FF781F] mb-2">
                                    {/* icon */}
                                </div>

                                <h4 className="font-bold text-slate-800">Client</h4>

                                <span className="text-xs text-slate-500">
                                I want to hire
                                </span>

                            </div>
                        </label>


                        {/* Pro */}
                        <label className="relative cursor-pointer">
                            <input
                                type="radio"
                                name="account_type"
                                value="pro"
                                className="peer sr-only"
                            />

                            <div className="rounded-2xl border-2 border-slate-100 bg-white p-5 text-center transition-all hover:bg-slate-50 peer-checked:border-[#FF781F] peer-checked:bg-orange-50/30">

                                <div className="mx-auto flex h-12 w-12 items-center justify-center text-slate-400 peer-checked:text-[#FF781F] mb-2">
                                    {/* icon */}
                                </div>

                                <h4 className="font-bold text-slate-800">Pro</h4>

                                <span className="text-xs text-slate-500">
                                    I offer services
                                </span>

                            </div>
                        </label>

                    </div>
                </div>

                {/* Step 2 */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        Step 2: Basic Information
                    </h3>

                    <div className="space-y-4">
                        <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#FF781F] focus:ring-1 focus:ring-[#FF781F]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#FF781F]"
                            />

                            <input
                                type="tel"
                                placeholder="Phone (06...)"
                                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#FF781F]"
                            />

                            <input
                                type="text"
                                placeholder="City"
                                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#FF781F]"
                            />

                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#FF781F]"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        Step 3: Professional Fields
                    </h3>

                    <div className="space-y-5">
                        <select className="w-full px-6 py-4 bg-slate-100 border border-slate-200 rounded-full text-slate-600 outline-none focus:border-[#FF781F]">
                            <option>Select Category</option>
                            <option>Plumbing</option>
                            <option>Electrician</option>
                            <option>Cleaning</option>
                        </select>

                        <select className="w-full px-6 py-4 bg-slate-100 border border-slate-200 rounded-full text-slate-600 outline-none focus:border-[#FF781F]">
                            <option>Select City</option>
                            <option>Casablanca</option>
                            <option>Rabat</option>
                            <option>Marrakech</option>
                        </select>

                        <textarea
                            rows="4"
                            placeholder="Tell us about your experience..."
                            className="w-full px-6 py-5 bg-slate-100 border border-slate-200 rounded-3xl text-slate-500 outline-none resize-none focus:border-[#FF781F]"
                        />
                    </div>
                </div>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <button
                    type="button"
                    className="flex items-center justify-center gap-3 py-4 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                        Google
                </button>

                <button
                    type="button"
                    className="flex items-center justify-center gap-3 py-4 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                        alt="facebook"
                        className="w-5 h-5"
                    />
                        Facebook
                </button>

                </div>

                <p className="text-center text-slate-500 text-sm md:text-base font-medium">
                    I have an account?{" "}
                    <span className="text-[#FF781F] font-bold cursor-pointer hover:underline">
                        Login
                    </span>
                </p>

            </form>
        </div>
    )
}