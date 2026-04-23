export default function RequestsHeader() {
    return (
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mt-5">
            <div>
                <h1 className="text-5xl font-bold tracking-normal text-[#1f252b]">Orders</h1>
                <p className="mt-3 text-lg font-normal tracking-wide text-slate-600">
                    Manage all your service requests
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="flex h-19.5 w-26 flex-col items-center justify-center rounded-lg bg-white shadow-sm sm:w-34">
                    <span className="text-sm font-medium text-slate-600">Total</span>
                    <span className="mt-1 text-2xl font-bold text-[#1f252b]">48</span>
                </div>

                <div className="flex h-19.5 w-26 flex-col items-center justify-center rounded-lg bg-white shadow-sm sm:w-34">
                    <span className="text-sm font-medium text-slate-600">Completed</span>
                    <span className="mt-1 text-2xl font-bold text-[#ff781f]">12</span>
                </div>
            </div>
        </div>
    );
}
