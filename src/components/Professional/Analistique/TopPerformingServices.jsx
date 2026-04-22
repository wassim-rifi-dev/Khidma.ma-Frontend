const services = [
    { name: "Plumbing Repair", requests: 42, percentage: 85, color: "bg-orange-500" },
    { name: "Electrical Installation", requests: 38, percentage: 65, color: "bg-sky-800" },
    { name: "Home Cleaning", requests: 24, percentage: 40, color: "bg-slate-600" },
];

export default function TopPerformingServices() {
    return (
        <section className="rounded-[28px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Top Performing Services</h2>

            <div className="mt-14 space-y-7">
                {services.map((service) => (
                    <div key={service.name}>
                        <div className="mb-2 flex items-center justify-between gap-4">
                            <p className="text-base font-medium text-slate-900">{service.name}</p>
                            <p className="shrink-0 text-sm font-medium text-stone-600">{service.requests} requests</p>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                            <div className={`h-full rounded-full ${service.color}`} style={{ width: `${service.percentage}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
