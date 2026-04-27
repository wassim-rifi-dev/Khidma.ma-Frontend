import { FiAlertCircle , FiMail, FiMapPin, FiPhone, FiShare2  } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#1E2532] text-white pt-16 pb-8 px-6 md:px-16 font-sans">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                
                    <div className="space-y-6">
                        <a href="#" className="text-2xl font-black flex items-center gap-1">
                            Khidma<span className="text-[#FF781F]">.ma</span>
                        </a>
                        
                        <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                            The leading platform in Morocco for connecting high-quality home service professionals with local customers. Trust, quality, and simplicity at your fingertips.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors">
                                <FiAlertCircle />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors">
                                <FiShare2 />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>

                        <ul className="space-y-4 text-[#94A3B8]">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Professionals</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">For Professionals</h4>

                        <ul className="space-y-4 text-[#94A3B8]">
                            <li><a href="#" className="hover:text-white transition-colors">Become a Pro</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>

                        <ul className="space-y-5 text-[#94A3B8]">
                            <li className="flex items-center gap-3">
                                <FiMail size={20} className="text-[#FF781F]" />
                                <span>contact@khidma.ma</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FiPhone size={20} className="text-[#FF781F]" />
                                <span>+212 522 00 00 00</span>
                            </li>
                            
                            <li className="flex items-center gap-3">
                                <FiMapPin size={20} className="text-[#FF781F]" />
                                <span>Casablanca, Morocco</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-700/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94A3B8]">
                    <p>
                        © 2024 Khidma.ma - All Rights Reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>

                        <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}