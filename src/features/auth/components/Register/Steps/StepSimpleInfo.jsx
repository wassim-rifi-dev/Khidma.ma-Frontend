import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiEye, FiEyeOff, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { MdLockOutline, MdLockReset } from "react-icons/md";

export default function StepSimpleInfo({ form, handleChange, setStep, isSubmitting, error }) {
    const [showPassword, setShowPassword] = useState(false);

    const isDisabled =
        isSubmitting ||
        !form.first_name.trim() ||
        !form.last_name.trim() ||
        !form.username.trim() ||
        !form.email.trim() ||
        !form.phone.trim() ||
        !form.password.trim() ||
        !form.password_confirmation.trim();

    return (
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <div className="mb-6 text-center sm:mb-8">
                <h2 className="text-lg font-bold text-slate-800 sm:text-xl md:text-2xl">
                    Your Information
                </h2>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Please provide your details to complete your profile.
                </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                            First Name
                        </label>

                        <div className="relative">
                            <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                            <input
                                name="first_name"
                                type="text"
                                value={form.first_name}
                                placeholder="John"
                                disabled={isSubmitting}
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm tracking-widest text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Last Name
                        </label>

                        <div className="relative">
                            <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                            <input
                                type="text"
                                name="last_name"
                                value={form.last_name}
                                placeholder="Doe"
                                disabled={isSubmitting}
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm tracking-widest text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Username
                    </label>

                    <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            placeholder="johndoe"
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Email Address
                    </label>

                    <div className="relative">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="john@example.com"
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Phone Number
                    </label>

                    <div className="relative">
                        <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            placeholder="+212 600 000000"
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Password
                        </label>

                        <div className="relative">
                            <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                placeholder="........"
                                disabled={isSubmitting}
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm tracking-widest text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={isSubmitting}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 disabled:cursor-not-allowed"
                            >
                                {showPassword ? <FiEyeOff className="text-lg sm:text-xl" /> : <FiEye className="text-lg sm:text-xl" />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <MdLockReset className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password_confirmation"
                                value={form.password_confirmation}
                                placeholder="........"
                                disabled={isSubmitting}
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm tracking-widest text-slate-700 transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={isSubmitting}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 disabled:cursor-not-allowed"
                            >
                                {showPassword ? <FiEyeOff className="text-lg sm:text-xl" /> : <FiEye className="text-lg sm:text-xl" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {error ? (
                <p className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                </p>
            ) : null}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Back
                </button>

                {form.role === "professional" ? (
                    <button
                        type="button"
                        className="w-full gap-2 rounded-xl bg-[rgb(255,120,31)] py-3 font-semibold text-white transition hover:bg-[#e96d17] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 sm:col-span-2"
                        onClick={() => setStep(3)}
                        disabled={isDisabled}
                    >
                        <span className="flex items-center justify-center gap-2">
                            Continue
                            <FaArrowRight size={14} />
                        </span>
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[rgb(255,120,31)] py-3 font-semibold text-white transition hover:bg-[#e96d17] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 sm:col-span-2"
                        disabled={isDisabled}
                    >
                        {isSubmitting ? "Creating account..." : "Enregistre"}
                    </button>
                )}
            </div>
        </div>
    );
}
