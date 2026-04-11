export default function Cards({Service}) {
    const Icon = Service.icon;

    return (
        <div className="p-6 bg-white border-2 border-[#F1F5F9] rounded-2xl w-52 flex flex-col gap-5">
            <div className="w-16 h-16 bg-[rgba(249,116,21,0.15)] rounded-full flex items-center justify-center">
                <Icon className="text-[#F97415]" size={28} />
            </div>

            <div className="space-y-1">
                <h4 className="text-[#0F172A] font-semibold text-lg">
                    {Service.title}
                </h4>

                <p className="text-[#94A3B8] text-sm">
                    {Service.desc}
                </p>
            </div>
        </div>
    )
}