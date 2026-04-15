import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { useLoginForm } from '../../../hooks/useLoginForm';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { form, handleChange, handleSubmit } = useLoginForm();

    return (

        <div className="bg-white w-full max-w-md mx-auto rounded-3xl border border-slate-50 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10">

            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-slate-900 tracking-tight">
                    Welcome Back
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm mt-2 font-medium">
                    Log in to your account to continue
                </p>
            </div>

            <form className="w-full space-y-4 sm:space-y-5" onSubmit={handleSubmit}>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                        Email
                    </label>

                    <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            value={form?.email || ''}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-base text-slate-700 placeholder-slate-400 font-medium focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                        Password
                    </label>

                    <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={form?.password || ''}
                            onChange={handleChange}
                            className="w-full pl-11 pr-11 py-3 sm:py-3.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-base text-slate-700 placeholder-slate-400 font-medium tracking-widest focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            {showPassword ? (
                                <FiEyeOff className="text-lg sm:text-xl" />
                            ) : (
                                <FiEye className="text-lg sm:text-xl" />
                            )}
                        </button>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-1">

                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-300 text-[#f97316] focus:ring-[#f97316] focus:ring-offset-0 bg-white cursor-pointer"
                        />

                        <span className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-slate-700">
                            Remember me
                        </span>
                    </label>

                    <a
                        href="#"
                        className="text-xs sm:text-sm font-bold text-[#f97316] hover:text-orange-600"
                    >
                        Forgot Password?
                    </a>

                </div>

                <button
                    className="mt-4 sm:mt-6 w-full flex items-center justify-center gap-2 bg-[#f97316] text-white font-bold py-3 sm:py-3.5 rounded-xl shadow-[0_8px_20px_-6px_rgba(249,115,22,0.5)] hover:bg-[#ea580c] transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none"
                >
                    Login
                    <FiArrowRight className="text-lg sm:text-xl stroke-[2.5px]" />
                </button>

            </form>

            <div className="mt-8 sm:mt-10 text-center">

                <div className="border-t border-slate-100 w-[90%] mx-auto mb-5 sm:mb-6"></div>

                <p className="text-slate-500 font-medium text-xs sm:text-sm">
                    Don't have an account?

                    <a
                        href="/register"
                        className="text-[#f97316] font-bold ml-1.5 hover:underline"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    )
}