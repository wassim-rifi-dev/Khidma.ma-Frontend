import { FiRefreshCw, FiTrash2 } from "react-icons/fi";

export default function ProfileSetting() {
    return (
        <section className="rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <h2 className="mb-6 text-lg font-semibold text-slate-900">Account Settings</h2>

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <p className="text-sm font-semibold text-slate-900">Email Notifications</p>
                    <p className="mt-1 text-xs text-slate-400">Get updates for your orders</p>
                </div>
                <div className="flex h-6 w-11 items-center rounded-full bg-orange-500 px-1">
                    <div className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
                </div>
            </div>

            <div className="mb-8 flex items-start justify-between">
                <div>
                    <p className="text-sm font-semibold text-slate-900">SMS Alerts</p>
                    <p className="mt-1 text-xs text-slate-400">Real-time urgent service alerts</p>
                </div>
                <div className="flex h-6 w-11 items-center rounded-full bg-slate-200 px-1">
                    <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                </div>
            </div>

            <button className="mb-3 flex w-full items-center justify-between rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-200">
                <span>Change Password</span>
                <FiRefreshCw className="h-4 w-4 text-slate-500" />
            </button>

            <button className="flex w-full items-center justify-between rounded-full bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100">
                <span>Delete Account</span>
                <FiTrash2 className="h-4 w-4 text-red-400" />
            </button>
        </section>
    );
}
