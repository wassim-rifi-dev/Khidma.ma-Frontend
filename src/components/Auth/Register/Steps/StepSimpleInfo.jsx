import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { MdLockOutline, MdLockReset } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export default function StepSimpleInfo({form , handleChange , setStep}) {
    return (
        <div className="bg-white w-full max-w-xl mx-auto rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    Your Information
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                    Please provide your details to complete your profile.
                </p>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name
                    </label>
                    <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <input
                            type="text"
                            name='name'
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
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
                            name='email'
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
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
                            name='phone'
                            placeholder="+212 600 000000"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Password
                        </label>
                        <div className="relative">
                            <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                            <input
                                type="password"
                                name='password'
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 tracking-widest focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <MdLockReset className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                            <input
                                type="password"
                                name='password_confirmation'
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 tracking-widest focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                <button
                    type="button"
                    className="mt-8 w-full bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                    Back
                </button>

                <button
                    className="mt-8 w-full flex items-center justify-center gap-2  bg-[rgb(255,120,31)] text-white font-semibold py-3 rounded-xl transition hover:bg-[#e96d17] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 col-span-2"
                    onClick={() => setStep(3)}
                    disabled={!form.name.trim() && !form.email.trim() && !form.phone.trim() && !form.password.trim() && !form.password_confirmation.trim()}
                >
                    Continue
                    <FaArrowRight size={14} />
                </button>
            </div>
        </div>
    )
}