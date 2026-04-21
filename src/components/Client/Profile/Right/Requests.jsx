export default function Requests() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-96">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Requests</h2>

            <div className="space-y-3">
                {[
                    { icon: "🔧", title: "Plumbing Emergency", date: "Oct 24, 2023", sub: "Kitchen Leak", status: "COMPLETED", statusStyle: "bg-green-100 text-green-500" },
                    { icon: "❄️", title: "AC Yearly Repair", date: "Oct 21, 2023", sub: "Maintenance", status: "IN PROGRESS", statusStyle: "bg-blue-100 text-blue-400" },
                    { icon: "⚡", title: "Electrical Wiring", date: "Oct 19, 2023", sub: "Living Room", status: "NEW", statusStyle: "bg-orange-100 text-orange-400" },
                    { icon: "🧹", title: "Deep Cleaning", date: "Oct 15, 2023", sub: "3-Bedroom Villa", status: "COMPLETED", statusStyle: "bg-green-100 text-green-500" },
                    { icon: "🖌️", title: "Interior Painting", date: "Oct 10, 2023", sub: "Feature Wall", status: "COMPLETED", statusStyle: "bg-green-100 text-green-500" },
                    { icon: "🖌️", title: "Interior Painting", date: "Oct 10, 2023", sub: "Feature Wall", status: "COMPLETED", statusStyle: "bg-green-100 text-green-500" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-base">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.date} • {item.sub}</p>
                            </div>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.statusStyle}`}>
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}