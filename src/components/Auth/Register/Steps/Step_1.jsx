export default function Step_1() {
    return (
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
    )
}