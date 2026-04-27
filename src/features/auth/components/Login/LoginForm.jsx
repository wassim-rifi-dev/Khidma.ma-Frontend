import { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useLoginForm } from "../../hooks/useLoginForm";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { form, handleChange, handleSubmit, isSubmitting, error } = useLoginForm();

    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-50 bg-white p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] sm:p-8 md:p-10">
            <div className="mb-6 text-center sm:mb-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-[28px]">
                    Welcome Back
                </h2>

                <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                    Log in to your account to continue
                </p>
            </div>

            <form className="w-full space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                        Email
                    </label>

                    <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            value={form?.email || ""}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-700 transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:cursor-not-allowed disabled:bg-slate-100 sm:py-3.5 sm:text-base"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                        Password
                    </label>

                    <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="........"
                            value={form?.password || ""}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm font-medium tracking-widest text-slate-700 transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:cursor-not-allowed disabled:bg-slate-100 sm:py-3.5 sm:text-base"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isSubmitting}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 disabled:cursor-not-allowed"
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
                    <label className="group flex cursor-pointer items-center gap-2">
                        <input
                            type="checkbox"
                            disabled={isSubmitting}
                            className="h-4 w-4 cursor-pointer rounded border-slate-300 bg-white text-[#f97316] focus:ring-[#f97316] focus:ring-offset-0 disabled:cursor-not-allowed"
                        />

                        <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 sm:text-sm">
                            Remember me
                        </span>
                    </label>

                    <a
                        href="#"
                        className="text-xs font-bold text-[#f97316] hover:text-orange-600 sm:text-sm"
                    >
                        Forgot Password?
                    </a>
                </div>

                {error ? (
                    <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                        {error}
                    </p>
                ) : null}

                <button
                    type="submit"
                    disabled={isSubmitting || !form?.email?.trim() || !form?.password?.trim()}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 font-bold text-white shadow-[0_8px_20px_-6px_rgba(249,115,22,0.5)] transition-all hover:bg-[#ea580c] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none sm:mt-6 sm:py-3.5"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                    <FiArrowRight className={`text-lg sm:text-xl ${isSubmitting ? "animate-pulse" : ""}`} />
                </button>
            </form>

            <div className="mt-8 text-center sm:mt-10">
                <div className="mx-auto mb-5 w-[90%] border-t border-slate-100 sm:mb-6"></div>

                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                    Don't have an account?
                    <a
                        href="/register"
                        className="ml-1.5 font-bold text-[#f97316] hover:underline"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
