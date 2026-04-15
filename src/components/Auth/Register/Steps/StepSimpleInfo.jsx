import { FiUser, FiMail, FiPhone, FiEyeOff, FiEye } from 'react-icons/fi';
import { MdLockOutline, MdLockReset } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function StepSimpleInfo({ form, handleChange, setStep }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8">

            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                    Your Information
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Please provide your details to complete your profile.
                </p>
            </div>

            <div className="space-y-4 sm:space-y-5">

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name
                    </label>

                    <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address
                    </label>

                    <div className="relative">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number
                    </label>

                    <div className="relative">
                        <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            placeholder="+212 600 000000"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Password
                        </label>

                        <div className="relative">
                            <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 tracking-widest focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                                onChange={handleChange}
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

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <MdLockReset className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password_confirmation"
                                value={form.password_confirmation}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 placeholder-slate-400 tracking-widest focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                                onChange={handleChange}
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

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">

                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                    Back
                </button>

                {
                    form.role === 'professional' ?

                        <button
                            className="w-full flex items-center justify-center gap-2 bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 sm:col-span-2"
                            onClick={() => setStep(3)}
                            disabled={
                                !form.name.trim() ||
                                !form.email.trim() ||
                                !form.phone.trim() ||
                                !form.password.trim() ||
                                !form.password_confirmation.trim()
                            }
                        >
                            Continue
                            <FaArrowRight size={14} />
                        </button>

                        :

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 sm:col-span-2"
                            disabled={
                                !form.name.trim() ||
                                !form.email.trim() ||
                                !form.phone.trim() ||
                                !form.password.trim() ||
                                !form.password_confirmation.trim()
                            }
                        >
                            Enregistre
                        </button>
                }

            </div>
        </div>
    );
}