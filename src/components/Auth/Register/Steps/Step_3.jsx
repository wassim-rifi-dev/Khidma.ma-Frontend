export default function Step_3() {
    return (
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
    )
}