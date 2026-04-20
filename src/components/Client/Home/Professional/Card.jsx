export default function Card() {
    return (
        <div className="bg-white rounded-[30px] md:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">

            <div className="flex justify-between items-start mb-6">

                <div className="relative">
                    <img
                        src="https://ui-avatars.com/api/?name=Ahmed+Benali&background=0D8ABC&color=fff"
                        alt="Ahmed"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-sm"
                    />

                    <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#22C55E] border-4 border-white rounded-full"></div>
                </div>

                <div className="bg-gray-50 px-3 py-1 rounded-full flex items-center gap-1">
                    <FaRegStar color="#EAB308" />
                    <span className="text-sm font-bold text-gray-700">
                        4.9
                    </span>
                </div>

            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-1">
                Ahmed Benali
            </h3>

            <p className="text-[#FF7A1A] text-xs font-black uppercase tracking-wider mb-4">
                Master Electrician
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Specialized in smart home installations and industrial wiring.
                12 years experience in...
            </p>

            <div className="flex justify-between items-center border-t border-gray-50 pt-6">
                <a href="#" className="text-[#FF7A1A] font-bold hover:underline">
                    Book Profile
                </a>
            </div>

        </div>
    )
}