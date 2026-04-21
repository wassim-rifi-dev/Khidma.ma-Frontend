export default function Picture() {
    return (
        <div className="w-full rounded-[40px] flex flex-col items-center text-center shadow-sm bg-white px-4 sm:px-6 md:px-10 py-10">

            <div className="w-28 h-28 rounded-full border-[5px] border-orange-500 overflow-hidden mb-4">
                <img
                    src="https://i.pravatar.cc/150?img=68"
                    alt="Amine Mansouri"
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Amine Mansouri
            </h2>

            <p className="text-gray-400 mt-1 text-sm sm:text-base">
                amine.mansouri@email.com
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
                +212 661 234 567
            </p>

            <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition">
                Edit Profile
            </button>

        </div>
    )
}