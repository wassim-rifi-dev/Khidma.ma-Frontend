export default function ProfileSetting() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-80">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Account Settings</h2>

            {/* Email Notifications */}
            <div className="flex items-start justify-between mb-5">
                <div>
                    <p className="text-sm font-semibold text-gray-900">Email Notifications</p>
                    <p className="text-xs text-gray-400 mt-0.5">Status updates for your orders</p>
                </div>
                <div className="w-11 h-6 bg-orange-500 rounded-full flex items-center px-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto shadow" />
                </div>
            </div>

            {/* SMS Alerts */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-sm font-semibold text-gray-900">SMS Alerts</p>
                    <p className="text-xs text-gray-400 mt-0.5">Real-time urgent service alerts</p>
                </div>
                <div className="w-11 h-6 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                </div>
            </div>

            {/* Change Password */}
            <div className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3 mb-3 cursor-pointer">
                <p className="text-sm font-semibold text-gray-900">Change Password</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                </svg>
            </div>

            {/* Delete Account */}
            <div className="flex items-center justify-between bg-red-50 rounded-xl px-4 py-3 cursor-pointer">
                <p className="text-sm font-semibold text-red-500">Delete Account</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
            </div>
        </div>
    )
}