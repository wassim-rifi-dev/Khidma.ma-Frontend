export default function Step_2() {
    return (
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
    )
}