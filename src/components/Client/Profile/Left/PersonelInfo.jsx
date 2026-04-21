export default function PersonelInfo() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-80">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
            </div>

            <div className="space-y-4">
                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">Amine Mansouri</p>
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">amine.mansouri@email.com</p>
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">+212 661 234 567</p>
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">Casablanca, Morocco</p>
                </div>
            </div>
        </div>
    )
}