import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    Welcome Back
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                    Log in to your account to continue
                </p>
            </div>

            <form className="max-w-md w-full mx-auto space-y-5">

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email
                    </label>
                    <div className="relative">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Password
                    </label>
                    <div className="relative">
                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 tracking-widest focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                        >
                            {showPassword ? (
                                <FiEyeOff className="text-xl" />
                            ) : (
                                <FiEye className="text-xl" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-200 text-orange-500 focus:ring-orange-500 focus:ring-offset-0 bg-slate-50 cursor-pointer transition-colors"
                        />
                        <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                            Remember me
                        </span>
                    </label>

                    <a
                        href="#"
                        className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                        Forgot Password?
                    </a>
                </div>

                <button
                    className="mt-8 w-full flex items-center justify-center gap-2  bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                >
                    Login
                </button>

            </form>

            <div className="mt-6 text-center border-t pt-4">
                <p className="text-gray-500">
                    Don't have an account?
                    <a href="/register" className="text-orange-500 font-semibold ml-1 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    )
}