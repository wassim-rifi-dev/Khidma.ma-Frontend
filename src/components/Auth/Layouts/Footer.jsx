import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-white py-12 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <div className="flex items-center space-x-2 text-gray-400 font-bold text-xs tracking-widest uppercase">
                        <IoShieldCheckmarkOutline size={16} />
                        <span>Secure Data</span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400 font-bold text-xs tracking-widest uppercase">
                        <RiGlobalLine size={16} />
                        <span>Nationwide Support</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-slate-400">
                    <p>&copy; 2026 Khidma.ma. All rights reserved.</p>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Help Center</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}