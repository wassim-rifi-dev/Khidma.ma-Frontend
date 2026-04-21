export default function Picture() {
    return (
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-md px-16 py-8 w-fit">
            `<div className="w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden mb-4">
                <img
                src="https://i.pravatar.cc/150?img=68"
                alt="Amine Mansouri"
                className="w-full h-full object-cover"
                />
            </div>

            <h2 className="text-xl font-bold text-gray-900">Amine Mansouri</h2>
            <p className="text-sm text-gray-400 mt-1">amine.mansouri@email.com</p>
            <p className="text-sm text-gray-400">+212 661 234 567</p>

            <button className="mt-6 px-8 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors">
                Edit Profile
            </button>`
        </div>
    )
}