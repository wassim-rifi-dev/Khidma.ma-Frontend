export default function Cards({Service , isDark}) {
    const Icon = Service.icon;

    return (
        <div className={`p-6 border-2 rounded-2xl w-52 flex flex-col gap-5 ${
            isDark ? 'bg-[#1F2937] border-[#334155]' : 'bg-white border-[#F1F5F9]'
        }`}>
            <div className="w-16 h-16 bg-[rgba(249,116,21,0.15)] rounded-full flex items-center justify-center">
                <Icon className="text-[#F97415]" size={28} />
            </div>

            <div className="space-y-1">
                <h4 className={`font-semibold text-lg ${
                    isDark ? 'text-white' : 'text-[#0F172A]'
                }`}>
                    {Service.title}
                </h4>

                <p className={`text-sm ${
                    isDark ? 'text-[#9CA3AF]' : 'text-[#94A3B8]'
                }`}>
                    {Service.desc}
                </p>
            </div>
        </div>
    )
}